import * as express from 'express';
import {Response} from 'express';
import {formPost} from "./form";
import {getNewAccessToken, validUser} from "../../../services/user";

export const  routerLogin =  express.Router();

const post = async (req: any, res: Response) => {
    try{
        let user: any = await validUser(req.body.username, req.body.password);

        if(!user){
            res.status(422).json(false);
            return false;
        }
        user = user.toJSON();
        delete user['password'];
        user['access_token'] = await getNewAccessToken(user.username);
        res.json(user);
    }catch (e) {
        res.status(500).json({message: e.message})
    }
};


routerLogin.post('/', formPost,(req, res) => post(req, res));
