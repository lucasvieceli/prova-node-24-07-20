import {configurations} from "./constants";

export const getConfiguration = async (key: string, complete = false) => {
    const config = await configurations.find(config => config.key == key);

    if(!config){
        return null;
    }

    if(complete){
        return config.toJSON();
    }

    return config.value;
}
