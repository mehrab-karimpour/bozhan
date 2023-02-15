import {NextFunction, Request} from 'express';

export interface declareRequest extends Request {
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
