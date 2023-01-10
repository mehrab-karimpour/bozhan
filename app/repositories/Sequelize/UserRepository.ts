import {BaseRepository} from "./BaseRepository";
import db from 'app/models/sequelize';
import UserRepositoryInterface from "app/repositories/UserRepositoryInterface";


export class UserRepository extends BaseRepository implements UserRepositoryInterface {

    public UserModel: any;

    constructor() {
        super(db.User);
        this.UserModel = db.User;
    }

}