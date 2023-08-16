import {NextFunction, Request, Response} from "express";
import AppError from "app/@types/error";
import {Container} from "app/providers/AppContainer";
import _errors = Container._errors;

export interface customError {
    name: string
    status: number
    message: string
}

export const requestLogger = (
    request: Request,
    response: Response,
    next: NextFunction) => {
    console.log(`${request.method} url:: ${request.url}`);
    next()
}


export const errorLogger = (
    error: AppError,
    request: Request | any,
    response: Response,
    next: NextFunction) => {
    console.log(`${error.message}`)
    let customErr: any | undefined;
    customErr = _errors?.find((err: any) => err.name === error.message)
    request.customError = customErr
    next()
}
export const errorResponder = (
    req: Request | any,
    response: Response,
    next: NextFunction) => {
    response.status(req.customError?.status ?? 404)
    response.json(req.customError.message)
}


