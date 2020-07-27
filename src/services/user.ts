import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import * as md5 from 'md5';
import {findUserByToken, findUserLogin, insertUser as insert, updateUser as update} from "../repository/user";
import {configs} from "../config/config";
import {NewUser} from "./interfaces/user";
import {Erro} from "../util/erro";
import {getConfiguration} from "./configuration";
import {insertPeople} from "./people";
import {insertEmailForgotPassword} from "./email";

export const getHashPassword    = async (password, saltRounds = 10) => bcrypt.hashSync(password, saltRounds )
export const validPassword      = async (password, hash) => bcrypt.compareSync(password, hash)
export const validUser          = async (username, password) => {
    const user = await findUserLogin(username);
    const valid = await validPassword(password, user.password)


    if(!user || !await validPassword(password, user.password)){
       return false;
    }

    return user;
}
export const insertUser         = async (body) => {
    try {
        return insert({
            ...body,
            ...{
                password: await getHashPassword(body.password),
            }
        });
    }catch (e) {
        throw e;
    }
}
export const updateUser         = async (body, where) => {
    try {
        return update(body, where);
    }catch (e) {
        throw e;
    }
}
export const registerNewUser    = async (body: NewUser) => {
    try {
        const exist = await findUserLogin(body.email);

        if(exist){
            throw new Erro({status: Erro.MSG_EXISTE.status, mensagem: Erro.MSG_EXISTE.mensagem});
        }
        const roleId    = await getConfiguration('ID_USER_ROLE');
        const people    = await insertPeople(body);
        let user        = await insertUser({
            ...body,
            ...{
                username: body.email,
                roleId,
                peopleId: people.id
            }
        });

        user = user.toJSON();
        user['access_token'] = await getNewAccessToken(user.username); //ja faz login
        delete user['password'];
        return user;
    }catch (e) {
        throw e;
    }
}
export const getNewAccessToken  = async (userName: string) => {
    const user = await findUserLogin(userName);
    return getJwt(user.toJSON());
}
export const getJwt             = async (user) => {
    return jwt.sign(user, configs.auth.secret, {
            expiresIn: 0 // expires in 5min
    })
}
export const forgotPassowrd     = async (username: string) => {
    try{
        const exist = await findUserLogin(username);

        if(!exist){
            throw new Erro({status: Erro.MSG_404_REGISTRO.status, mensagem: Erro.MSG_404_REGISTRO.mensagem});
        }
        const token = await md5(new Date().getTime().toString()+'tokennewpassword');

        const result = await updateUser({token}, {id: exist.id});
        if(result && result[0]){
            await insertEmailForgotPassword(username, token)

            return true;
        }

        return false;
    }catch (e) {
        console.log(e)
        throw e;
    }
}
export const forgotPassowrdUpdate = async (token: string, newPassword: string) => {
    try{
        const exist = await findUserByToken(token);

        if(!exist){
            throw new Erro({status: Erro.MSG_404_REGISTRO.status, mensagem: Erro.MSG_404_REGISTRO.mensagem});
        }

        const update = {
            password: await getHashPassword(newPassword),
            token: null
        }
        const result = await updateUser(update, {id: exist.id});
        if(result && result[0]){
            return true;
        }

        return false;
    }catch (e) {
        throw e;
    }
}

