import {NextFunction, Request, Response} from "express";
import AuthCache from "vendor/core/cache/authCache";
import db from "app/models/sequelize";
import Middleware from "./Middleware";
import {declareRequest} from "../../@types";


export class PermissionMiddleware extends Middleware {


    public static _name: string = 'permission'
    public static hasParams: boolean = true
    public static parameters: any = null

    /**
     * if params be equal to true for getting params you need public params() method...
     * @param parameters
     * @author mehrab karimpour
     */
    constructor(parameters: object | string | null = null) {
        super();
        PermissionMiddleware.parameters = parameters
    }
    /**
     * @param req
     * @author mehrab karimpour
     */
    public static async hasPermission(req: Request) {
        let role = await db.User.findOne({
            include: {
                association: 'permissions',
                where: {
                    key: this.parameters
                }
            },
            where: {
                // @ts-ignore
                id: req.auth.id
            },
            attributes: ['id'],
        })
        // @ts-ignore
        console.log(this.parameters)
        // @ts-ignore
        return req.auth.permissions = role?.dataValues?.permissions ?? null
    }
    /**
     * @param req
     * @param res
     * @param next
     */
    public async run(req: declareRequest, res: Response, next: NextFunction) {


        if (!req.auth) return Middleware.needAuth(req, res)

        await PermissionMiddleware.hasPermission(req)

        // @ts-ignore
        if (req.auth.permissions)
            return next()
        // @ts-ignore
        console.log(req.auth.permissions)
        return res.status(403).json({
            status: false,
            message: 'دسترسی غیر مجاز',
            data: null
        })
    }

}