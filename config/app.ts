import 'dotenv'

const appConfig = {
    apiBase: process.env.HAS_API_BASE || false,
    port: process.env.APP_PORT || 5000,
    host: process.env.HOST || "localhost",
    secretKey: process.env.SECRET_KEY || 'bozhan',
    envPath: function () {
        let currentPath: any = __dirname.split('/')
        delete currentPath[currentPath.length - 1]
        delete currentPath[currentPath.length - 2]
        currentPath = currentPath.join('/')
        currentPath = currentPath.slice(0, -1)
        return currentPath + '.env';
    }
}

export default appConfig