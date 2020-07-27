import {ON_RESTART_CONSTANTS, PubSub} from "./subscribes";
import {getAllConfiguration} from "../repository/configuration";

export let configurations: any[];


const restartConstants = async () =>{
    restartConfiguration();
}

const restartConfiguration = async () => configurations = await getAllConfiguration();

PubSub.subscribe(ON_RESTART_CONSTANTS, () => restartConstants());
