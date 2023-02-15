import ResponseAbstract from "app/services/response/responseAbstract";
import {Request, Response} from "express";
import {declareRequest} from "../../../@types";

export default class Html extends ResponseAbstract {

    readonly type: string = 'html';

    /**
     * @param req
     * @param res
     * @param data
     */
    public converter(req: declareRequest, res: Response, data: any): any {
        return res.render(req.agentView, {data})
    }

}
