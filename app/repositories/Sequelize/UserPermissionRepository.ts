import {BaseRepository} from "./BaseRepository";
import db from 'app/models/sequelize';
import UserPermissionRepositoryInterface from "app/repositories/UserPermissionRepositoryInterface";


export class UserPermissionRepository extends BaseRepository implements UserPermissionRepositoryInterface {

    public UserPermissionModel: any;

    constructor() {
        super(db.UserPermission);
        this.UserPermissionModel = db.UserPermission;
    }

}