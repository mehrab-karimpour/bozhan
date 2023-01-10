import 'dotenv'

const appConfig = {
    appEnv: 'production',
    apiBase: process.env.HAS_API_BASE || false,
    port: process.env.APP_PORT || 5000,
    host: process.env.HOST || "localhost",
    secretKey: process.env.SECRET_KEY || 'bozhan',
    appPath: '/home/oem/dev/production/bozhan',
    sequelizeConfigDevelopment: '/home/oem/dev/production/bozhan/config/sequelize.ts',
    sequelizeConfigProduction: '/home/oem/dev/production/bozhan/build/config/sequelize.js',
}

export default appConfig