import BaseService from './BaseService';
import UserController from '../controllers/UserController';
import AuthenticationController from '../controllers/AuthenticationController';
import passport from 'passport';
import AuthenticationHelper from '../helpers/AuthenticationHelper';

/**
 * Services for app web
 */
class AuthenticationService extends BaseService{

    constructor(){
        super();
        this.userController = new UserController;
        this.authenticationController = new AuthenticationController;
    }

    async login(req,res,next){
        passport.authenticate('login', (err, user, info)=>{
            if(err)
                return res.status(500).json({error: JSON.parse(process.env.errors).internal_server_error });
            if(!user)
                return res.status(401).json({error: JSON.parse(process.env.errors).user_pass_invalid });
            let token = AuthenticationHelper.generateJWT(user);
            this.userController.updateToken(user.iduser, token);
            return res.status(200).json({token:token});
        })(req, res, next)
    }

    async logout(req,res){
       try{
            await this.userController.updateToken(req.payload.data.iduser, null);
            return res.status(200).json({"ok":JSON.parse(process.env.success).logout_successfully});
       }
       catch(err){
            this.logger.error("logout@RegisterService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
       }
    }

}

module.exports = AuthenticationService;
