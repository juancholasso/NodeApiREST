import UsersHasRoles from '../models/UsersHasRoles.js';
import RolesHasPermissions from '../models/RolesHasPermissions.js';
import UserController from '../controllers/UserController';
import RolesController from '../controllers/RolesController';
import AuthenticationController from '../controllers/AuthenticationController';
import PermissionsController from '../controllers/PermissionsController';

/**
 * Services for app web
 */

class AuthenticationService{

    constructor(){
        this.userController = new UserController;
        this.rolesController = new RolesController;
        this.permissionsController = new PermissionsController;
        this.authenticationController = new AuthenticationController;
    }

}

module.exports = AuthenticationService;
