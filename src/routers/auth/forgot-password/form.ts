import {check} from "express-validator/check";

export const formPost = [
    check('username').exists().isLength({ max: 150, min: 5 }),
];
export const formPostUpdate = [
    check('token').exists().isLength({ max: 60, min: 10 }),
    check('passwordConfirm').exists(),
    check('password').exists().isLength({ min: 4 })
        .custom((value,{req}) => {
            if (value !== req.body.passwordConfirm) {
                // trow error if passwords do not match
                throw new Error("Passwords don't match");
            } else {
                return value;
            }
        })
];

