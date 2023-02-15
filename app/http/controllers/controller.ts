import {Request, Response} from "express"
import AppResponse from "app/services/response/response";
import {injectableServiceProvider} from "app/providers/injectableServiceProvider";
import Redis from "app/models/redis/redis";
import {declareRequest} from "app/@types";

const autoBind = require('auto-bind')

export class Controller {

    public recaptcha: any = {};
    public redisService: any
    public data: {} | [] = [];
    public statusCode: number = 200;
    public agentView: string = 'home';

    constructor() {
        autoBind(this)
        this.redisService = Redis
    }

    public response = async (req: declareRequest, res: Response) => {

        await this.cacheHandler(req, this.data)
        return res.status(this.statusCode).json(this.data)
    }

    private cacheHandler = async (req: declareRequest, data: any) => {
        try {
            if (req.cacheEnable) {
                let dataCaching = {
                    status: this.statusCode,
                    data,
                }

                if (typeof req.cacheEnable !== "boolean") {
                    let [key, EX] = req.cacheEnable.split(',')
                    await this.redisService.set(key, dataCaching, {EX: parseInt(EX)})
                }
            }
        } catch (e) {

        }


    }
    public render = async (req: declareRequest, res: Response, data: any = null) => {
        let appResponse = injectableServiceProvider.bind(AppResponse)
        req.agentView = this.agentView
        return appResponse.response(req, res, data)
    }

    public addItemToArray(arr: any, key: string, value: any) {
        arr.map((item: any, index: number) => {
            arr[index][key] = value
        })
        return arr
    }

    public parent = () => {
        return 'controller'
    }

}