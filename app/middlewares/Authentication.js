import AuthenticationService from '../services/AuthenticationService';
import AuthenticationHelper from '../helpers/AuthenticationHelper';
import UserController from '../controllers/UserController';

const userController = new UserController;

/**
 * Decode JWT to user JSON
 */
let decodeToken =  async function (req, res, next){
    try{
        let token = req.headers.authorization;
        req.payload = AuthenticationHelper.decodeJWT(token)
        next();
    }
    catch(err){
        throw err;
    }
};

/**
 * Check if token corresponding to register user on DB
 * This middleware prevents the user from having two more tokens available
 */
let checkToken =  async function (req, res, next){
    try{
        let user = await userController.getUser(req.payload.data.iduser);
        if(user.token == req.headers.authorization.replace("Bearer ",""))
            next();
        else
            res.status(401).json({"error": JSON.parse(process.env.errors).token_invalid})
    }
    catch(err){
        throw err;
    }
};

module.exports.decodeToken = decodeToken;
module.exports.checkToken = checkToken;