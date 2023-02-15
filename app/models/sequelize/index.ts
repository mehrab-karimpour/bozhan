'use strict';

import appConfig from "config/app";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);

// @ts-ignore
const sequelizeConfigPath = appConfig.appEnv === 'production' ? appConfig.sequelizeConfigProduction : appConfig.sequelizeConfigDevelopment
const config = require(sequelizeConfigPath)[appConfig.appEnv];
const db: any = {};

let sequelize: any;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}


fs.readdirSync(__dirname).filter((file: any) => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === (appConfig.appEnv === 'production' ? '.js' : '.ts'))
}).forEach((file: any) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model;
});

Object.keys(db).forEach(modelName => {

    if (typeof db[modelName].associate === 'function') {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
