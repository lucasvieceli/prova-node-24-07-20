import * as fs from 'fs';
import * as path from 'path';
import {Sequelize} from 'sequelize';

import {configs} from './config/config';

const basename = path.basename(module.filename);
export const models: any = {};

export const sequelize: any = new Sequelize(
    configs.database.database,
    configs.database.username,
    configs.database.password,
    configs.database,
);

fs
    .readdirSync(__dirname+ '/models/')
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = sequelize.import(path.join(__dirname + '/models/', file));
        models[model.name] = model;
    });


Object.keys(models).forEach(modelName => {
    if (models[modelName].associate) {
        models[modelName].associate(models);
    }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;




//
//
//
//
// class Database {
//     private _basename: string;
//     private _models;
//     private _sequelize: Sequelize;
//
//
//     constructor() {
//         this._basename = path.basename(module.filename);
//
//         this._sequelize = new Sequelize(
//             configs.database.database,
//             configs.database.username,
//             configs.database.password,
//             configs.database,
//         );
//         this._models = {} as any;
//         fs.readdirSync(__dirname + '/models/')
//             .filter((file: string) => {
//                 return file !== this._basename;
//             })
//             .forEach((file: string) => {
//                 const model = this._sequelize.import(path.join(__dirname + '/models/', file));
//                 this._models[(model as any).name] = model;
//             });
//
//         Object.keys(this._models).forEach((modelName: string) => {
//             if (typeof this._models[modelName].associate === 'function') {
//                 this._models[modelName].associate(this._models);
//             }
//         });
//     }
//
//     public getModels() {
//         return this._models;
//     }
//
//     public getSequelize() {
//         return this._sequelize;
//     }
// }
//
// const database = new Database();
// export const models = database.getModels();
// export const sequelize = database.getSequelize();
