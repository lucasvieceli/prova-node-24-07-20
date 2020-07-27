import * as uuid from 'node-uuid';
import {getDate} from "../util/date";
import {models} from "../sequelize";

export const insertPeople = async (body)=> {
    try{
        const newBody = {
            id: uuid(),
            createdDate: getDate(),
            modifiedDate: getDate(),
            cpf: body.cpf,
            email: body.email,
            name: body.name,
            phone: body.phone,
        }
        return models.people.create(newBody);
    }catch (e) {
        throw e;
    }
}
