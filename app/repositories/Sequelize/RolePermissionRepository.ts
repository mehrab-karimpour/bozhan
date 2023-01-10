import {BaseRepository} from "./BaseRepository";
import db from 'app/models/sequelize';
import RolePermissionRepositoryInterface from "app/repositories/RolePermissionRepositoryInterface";


export class RolePermissionRepository extends BaseRepository implements RolePermissionRepositoryInterface {

    public UserModel: any;

    constructor() {
        super(db.RolePermission);
        this.UserModel = db.RolePermission;
    }

}