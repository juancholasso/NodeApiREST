import AuthenticationService from '../services/AuthenticationService';
import authenticationHelper from '../helpers/AuthenticationHelper';

/**
 * Decode JWT to user JSON
 */
let decodeToken =  async function (req, res, next){
    try{
        let token = req.headers.authorization;
        req.payload = authenticationHelper.decodeJWT(token)
        console.log("token", token)
        next();
    }
    catch(err){
        throw err;
    }
};

module.exports.decodeToken = decodeToken;