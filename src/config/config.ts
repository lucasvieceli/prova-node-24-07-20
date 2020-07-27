import {dev} from './configs.dev';
import {local} from './configs.dev.local.js';

export const CURRENT_MODE = (process.env.NODE_ENV) ? process.env.NODE_ENV : 'DEV';

let configMode = null;
switch (CURRENT_MODE) {
    case 'DEV':
        configMode =  {
            ...dev,
            ...local
        };
        break;
}

export let configs = configMode;
