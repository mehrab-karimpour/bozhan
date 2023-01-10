import {BaseRepository} from "app/repositories/Sequelize/BaseRepository";
import db from 'app/models/sequelize';
import PermissionRepositoryInterface from "app/repositories/PermissionRepositoryInterface";


export class PermissionRepository extends BaseRepository implements PermissionRepositoryInterface {

    public UserModel: any;

    constructor() {
        super(db.Permission);
        this.UserModel = db.Permission;
    }

}