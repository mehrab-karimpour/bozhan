import {NextFunction, Request} from 'express';
import {customError} from "app/eroors";

export interface declareRequest extends Request {
    error: customError
    auth: object | null | Array<object>,
    contentType: string,
    agentView: string,
    cacheEnable: boolean | string,
    userAgent: string
}

const declares = (app: any) => {
    return app.use((req: declareRequest, res: Response, next: NextFunction) => {
        next();
    });
}

export default declares
