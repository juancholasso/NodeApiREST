import Role from '../models/Role.js';
import UserController from '../controllers/UserController';
import RolesController from '../controllers/RolesController';

/**
 * Services for app web
 */

class UserService{

    constructor(){
        this.userController = new UserController;
        this.rolesController = new RolesController
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
