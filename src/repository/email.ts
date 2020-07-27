import {getDate} from "../util/date";
import {models} from "../sequelize";
import * as uuid from 'node-uuid';


export const insertEmail = async (body) => {
    const newBody = {
        id: uuid(),
        createdDate: getDate(),
        modifiedDate: getDate(),
        from: body.from,
        title: body.title,
        body: body.body,
        to: body.to,
    };
    return models.email.create(newBody);
}
