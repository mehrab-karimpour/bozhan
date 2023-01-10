import {BaseRepository} from "./BaseRepository";
import db from 'app/models/sequelize';
import UserRoleRepositoryInterface from "app/repositories/UserRoleRepositoryInterface";


export class UserRoleRepository extends BaseRepository implements UserRoleRepositoryInterface {

    public UserRoleModel: any;

    constructor() {
        super(db.UserRole);
        this.UserRoleModel = db.UserRole;
    }

}