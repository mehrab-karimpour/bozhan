import {NextFunction} from "express";
import {Controller} from "app/http/controllers/controller";
import {injectableServiceProvider} from "app/providers/injectableServiceProvider";
import Jwt from "app/auth/jwt";
import Auth from "vendor/core/Auth";

class LogoutController extends Controller {

    public jwtAuth: Auth;

    constructor() {
        super();
        this.jwtAuth = injectableServiceProvider.bind(Jwt)
    }

    public async index(req: Request, res: Response, next: NextFunction) {

        // @ts-ignore
        await this.jwtAuth.logout(req)
        // @ts-ignore
        return res.json(req.auth)
    }

}

export default LogoutController