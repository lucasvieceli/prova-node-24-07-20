import {InsertEmail} from "./interfaces/email";
import {configs} from "../config/config";
import {insertEmail as insert} from "../repository/email";


export const insertEmail = async (params: InsertEmail) => {
    try{
        if(!params.from){
            params.from = configs.email.from
        }

        return insert(params);
    }catch (e) {
        throw e;
    }
}


export const insertEmailForgotPassword = async (email, token) => {
    try {
        const body = `
        Olá,
        
        Segue link para <a href="www.google.com.br/token=${token}">recuperar a senha</a>
    `;

        return insertEmail({
            to: email,
            body,
            title: configs.email.forgotPassword.title,
        })
    }catch (e) {
        throw e;
    }
}
