import {check} from "express-validator/check";

export const formPost = [
    check('name').exists().isLength({ max: 150, min: 5 }),
    check('phone').exists().isLength({ max: 20, min: 5 }),
    check('cpf').exists().isLength({ max: 20, min: 5 }),
    check('email').exists().isLength({ max: 150, min: 5 }),
    check('password').exists().isLength({ min: 4 }),
];
