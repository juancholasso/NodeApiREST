import UserController from '../controllers/UserController';
import AuthenticationController from '../controllers/AuthenticationController';

/**
 * Services for app web
 */

class AuthenticationService{

    constructor(){
        this.userController = new UserController;
        this.authenticationController = new AuthenticationController;
    }

}

module.exports = AuthenticationService;
