import * as express from 'express';
import {routerLogin} from "./login/router";
import {routerRegister} from "./register/router";
import {routerForgotPassword} from "./forgot-password/router";

export const  routerAuth =  express.Router();

routerAuth.use('/login', routerLogin);
routerAuth.use('/register', routerRegister);
routerAuth.use('/forgot-password', routerForgotPassword);
