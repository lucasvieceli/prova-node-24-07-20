import {insertPeople as insert} from "../repository/people";

export const insertPeople = async (body) => {
    try {
        return insert(body);
    }catch (e) {
        throw e;
    }
}
