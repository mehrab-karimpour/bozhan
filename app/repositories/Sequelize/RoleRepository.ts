import {BaseRepository} from "./BaseRepository";
import db from 'app/models/sequelize';
import RoleRepositoryInterface from "app/repositories/RoleRepositoryInterface";


export class RoleRepository extends BaseRepository implements RoleRepositoryInterface {

    public UserModel: any;

    constructor() {
        super(db.Role);
        this.UserModel = db.Role;
    }

}