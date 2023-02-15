import {NextFunction, Request, Response} from 'express'
import {declareRequest} from "app/@types";
import Redis from "app/models/redis/redis";


export class CacheMiddleware {


    public static _name: string = 'cache'
    public static hasParams: boolean = true
    public static parameters: any = null


    /**
     * @param parameters
     * @author mehrab karimpour
     */
    constructor(parameters: object | string | null = null) {
        CacheMiddleware.parameters = parameters
    }

    /**
     * @param req
     * @param res
     * @param next
     */
    public async run(req: declareRequest, res: Response, next: NextFunction) {
        try {
            let [key]: string = CacheMiddleware.parameters.split(',')

            let result = await Redis.get(key)
            req.cacheEnable = CacheMiddleware.parameters
            if (result) {
                result = JSON.parse(result)
                return res.status(result.status).json(result.data)
            }
            req.cacheEnable = CacheMiddleware.parameters
        } catch (e) {

        }
        return next()
    }

}