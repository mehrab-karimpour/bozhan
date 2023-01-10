import 'dotenv'

const appRoot = require('app-root-path').path;


const appConfig = {
    appEnv: 'development',
    apiBase: process.env.HAS_API_BASE || false,
    port: process.env.APP_PORT || 5000,
    host: process.env.HOST || "localhost",
    secretKey: process.env.SECRET_KEY || 'bozhan',
    appPath: appRoot,
    sequelizeConfigDevelopment: appRoot + '/config/sequelize.ts',
    sequelizeConfigProduction: appRoot + '/build/config/sequelize.js',
}

export default appConfig