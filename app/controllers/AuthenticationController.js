import BaseController from './BaseController';
import UserController from '../controllers/UserController';

/**
 * AuthenticationController 
 */
class AuthenticationController extends BaseController{

    constructor(){
        super();
        this.userController = new UserController;
    }
  
    async checkEmailAndPassword(email, password){
        try{
            let user = await this.userController.getUserByEmail(email);
            if(user){
                if(this.bcrypt.compareSync(password, user.get('password'))){
                    return true;
                }
                return false;
            }
            return false;
        }
        catch(err){
            throw err;
        }
    }
}

//Exports-------------------------------------
module.exports = AuthenticationController;
