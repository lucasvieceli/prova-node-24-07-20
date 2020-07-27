import {check} from "express-validator/check";

export const formPost = [
    check('username').exists().isLength({ max: 150, min: 5 }),
    check('password').exists(),
];
