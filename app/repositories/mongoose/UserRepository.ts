import {BaseRepository} from "app/repositories/mongoose/BaseRepository";
import UserRepositoryInterface from "app/repositories/UserRepositoryInterface";
import user from 'app/models/mongoose/user'


export class UserRepository extends BaseRepository implements UserRepositoryInterface {

    public UserModel: any

    constructor() {
        super(user)
        this.UserModel = user
    }



}