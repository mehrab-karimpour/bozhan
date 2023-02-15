import {declareRequest} from "app/@types";
export {}
import "reflect-metadata"
import {Request, Response} from "express"
import {Controller} from "./controller"
import {injectableServiceProvider} from 'app/providers/injectableServiceProvider'
import {UserRepository} from "app/repositories/Sequelize/UserRepository"


class IndexController extends Controller {

    public userRepository: any;


    constructor() {
        super();
        this.userRepository = injectableServiceProvider.bind(UserRepository);
    }

    /**
     * @param req
     * @param res
     */
    public index = async (req: declareRequest, res: Response) => {
        // return this.response(req, res)
        return this.render(req, res)
    }

}

export default IndexController
