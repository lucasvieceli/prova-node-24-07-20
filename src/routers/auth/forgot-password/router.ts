import * as express from 'express';
import {Response} from 'express';
import {formPost, formPostUpdate} from "./form";
import {forgotPassowrd, forgotPassowrdUpdate} from "../../../services/user";
import {Erro} from "../../../util/erro";
import {validationResult} from "express-validator/check";

export const  routerForgotPassword =  express.Router();

(async ()=> {
    routerForgotPassword.post('/'           , formPost,(req, res) => post(req, res));
    routerForgotPassword.post('/update'     , formPostUpdate,(req, res) => postUpdate(req, res));
})();

const post = async (req: any, res: Response) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Erro({status: Erro.MSG_FORMULARIO.status, mensagem: errors.mapped()});
        }
        const result = await forgotPassowrd(req.body.username);
        res.json(result)
    }catch (e) {
        console.log(e)
        Erro.catch(e, res);
    }
};
const postUpdate = async (req: any, res: Response) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Erro({status: Erro.MSG_FORMULARIO.status, mensagem: errors.mapped()});
        }
        const result = await forgotPassowrdUpdate(req.body.token, req.body.password);
        res.json(result)
    }catch (e) {
        console.log(e)
        Erro.catch(e, res);
    }
};



