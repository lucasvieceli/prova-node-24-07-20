import * as express from 'express';
import {Response} from 'express';
import {formPost} from "./form";
import {registerNewUser} from "../../../services/user";
import {Erro} from "../../../util/erro";
import {validationResult} from "express-validator/check";

export const  routerRegister =  express.Router();

const post = async (req: any, res: Response) => {
    try{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            throw new Erro({status: Erro.MSG_FORMULARIO.status, mensagem: errors.mapped()});
            return false;
        }
        const result = await registerNewUser(req.body);
        res.json(result)
    }catch (e) {
        console.log(e)
        Erro.catch(e, res);
    }
};


routerRegister.post('/', formPost,(req, res) => post(req, res));
