import BaseService from './BaseService';
import UserController from '../controllers/UserController';

/**
 * Services for app web
 */

class UserService extends BaseService{

    constructor(){
        super();
        this.userController = new UserController;
    }

     async getUsers(req, res){
        try{
            let users = await this.userController.getUsers();
            res.status(200).json(users);
        }
        catch(err){
            res.status(500).json({err: JSON.parse(process.env.errors).internal_server_error})
        }
    }
}

module.exports = UserService;
