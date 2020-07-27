import * as express from 'express';
import {routerAuth} from "./auth";

export const  routers =  express.Router();

routers.use('/auth', routerAuth);
