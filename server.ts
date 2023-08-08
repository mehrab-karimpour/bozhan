export {}
require('app-module-path').addPath(__dirname)

import "reflect-metadata";
import App from './public/index';

const app = new App()

export default app.expressApp