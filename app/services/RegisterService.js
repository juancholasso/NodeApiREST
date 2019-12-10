import BaseService from './BaseService';
import UserController from '../controllers/UserController';
const { Validator } = require('node-input-validator');

/**
 * Services for app web
 */
class RegisterService extends BaseService{

    constructor(){
        super();
        this.userController = new UserController;
    }

    async signUp(req, res){
        try{
            const validator = new Validator(req.body, {
                email: 'required|email',
                password: 'required',
                name : 'required',
                lastname: 'required',
                telephone: 'required|digitsBetween:8,12',
                iddocument: 'required|digitsBetween:8,12'
                },JSON.parse(process.env.validators)
            );
            var check = await validator.check();
            if(!check)
                res.status(400).json({"error":validator.errors});

            await this.userController.createUser(req.body.name, req.body.lastname, req.body.password, req.body.iddocument, req.body.email, req.body.telephone);
            res.status(200).json({"ok":JSON.parse(process.env.success).user_created});
        }
        catch(err){
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
        
    }
}

module.exports = RegisterService;
