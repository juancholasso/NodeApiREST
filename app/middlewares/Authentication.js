import AuthenticationService from '../services/AuthenticationService';
import AuthenticationHelper from '../helpers/AuthenticationHelper';

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

module.exports.decodeToken = decodeToken;