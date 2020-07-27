import {models} from "../sequelize";
import * as uuid from 'node-uuid';
import {getDate} from "../util/date";

export const findUserLogin = (username) =>{
    return models.user.findOne({
        where:{
            username: username.toString().toLowerCase().trim(),
        }
    });
}
export const findUserByToken = (token) =>{
    return models.user.findOne({
        where:{
            token
        }
    });
}

export const insertUser = async (body)=> {
    try{
        const newBody = {
            id: uuid(),
            createdDate: getDate(),
            modifiedDate: getDate(),
            username: body.username.toString().toLowerCase().trim(),
            password: body.password,
            peopleId: body.peopleId,
            roleId: body.roleId,
        }
        return models.user.create(newBody);
    }catch (e) {
        throw e;
    }
}
export const updateUser = async (body, where)=> {
    try{
        body['modifiedDate'] = getDate();

        return models.user.update(body, {where});
    }catch (e) {
        throw e;
    }
}
