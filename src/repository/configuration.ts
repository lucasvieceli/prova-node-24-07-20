import {models} from "../sequelize";

export const getConfigurationByKey = (key: string) => {
    return models.configuration.findOne({
        where:{
            key,
        }
    });
}

export const getAllConfiguration = () => {
    return models.configuration.findAll();
}
