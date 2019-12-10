import UserController from '../controllers/UserController';
import bcrypt from 'bcrypt';

/**
 * AuthenticationController 
 */
class AuthenticationController{

    constructor(){
        this.userController = new UserController;
    }
  
    async checkEmailAndPassword(email, password){
        try{
            let user = await this.userController.getUserByEmail(email);
            if(user){
                if(bcrypt.compareSync(password, user.get('password'))){
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
