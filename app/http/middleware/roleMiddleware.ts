import {NextFunction, Request, Response} from "express";
import AuthCache from "vendor/core/cache/authCache";
import db from "app/models/sequelize";
import Middleware from "./Middleware";
import {Auth} from "vendor/core/autoload/auth";
import {declareRequest} from "../../@types";


export class RoleMiddleware {


    public static _name: string = 'role'
    public static hasParams: boolean = true
    public static parameters: any = null

    /**
     *    @param parameters
     * @author mehrab karimpour
     */
    constructor(parameters: object | string | null = null) {
        RoleMiddleware.parameters = parameters
    }

    /**
     * @param req
     */
    public static async hasRole(req: Request) {
        let role = await db.User.findOne({
            include: {
                association: 'roles',
                where: {
                    key: RoleMiddleware.parameters
                }
            },
            where: {
                // @ts-ignore
                id: Auth().id
            },
            attributes: ['id'],
        })
        // @ts-ignore
        return req.auth.roles = role?.dataValues?.roles ?? null
    }
    /**
     * @param req
     * @param res
     * @param next
     */
    public async run(req: declareRequest, res: Response, next: NextFunction) {
        if (!req.auth) return Middleware.needAuth(req, res)

        await RoleMiddleware.hasRole(req)
        // @ts-ignore
        if (req.auth.roles)
            return next()
        else return res.status(403).send({
            status: false,
            message: 'دسترسی غیر مجاز',
            data: null
        })
    }

}