import {customError} from "app/eroors/index";


class DataNotFoundError implements customError {
    name: string = 'data_not_found'
    status: number = 404
    message: string = 'local data not found!'
}

export default new DataNotFoundError