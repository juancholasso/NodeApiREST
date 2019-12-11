import BaseController from './BaseController';
import User from '../models/User';

/**
 * UserController
 */
class UserController extends BaseController{
    
    constructor(){
        super();
    }

    async getUsers(){
        try{
            let users = await User.findAll();
            return users;
        }
        catch(err){
            throw err;
        }
    }
    
    async createUser(pname, plastname, ppassword, piddocument, pemail, ptelephone ){
        let transaction;
        try{
            transaction = await this.sequelize.transaction();

            let newUser = await User.create({
                name:pname,
                lastname:plastname,
                password:this.bcrypt.hashSync(ppassword,10),
                iddocument:piddocument,
                email:pemail,
                telephone:parseInt(ptelephone),
            }, {transaction: transaction})

            await transaction.commit();
        }
        catch(err){
            await transaction.rollback();
            throw err;
        }
    }
    
    async deleteUser(iduser){
        let transaction;
        try{
            transaction = await this.sequelize.transaction();
            await User.destroy({ where: { iduser: iduser } }, {transaction: transaction});
            await transaction.commit();
        }
        catch(err){
            await transaction.rollback();
            throw err;
        }
    }
    
    async getUser(iduser){
        try{
            let userRes = await User.findByPk(iduser);
            return userRes;
        }
        catch(err){
            throw err;
        }
    }

    async getUserByEmail(pEmail){
        try{
            let userRes = await User.findOne({where:{email: pEmail}});
            return userRes;
        }
        catch(err){
            throw err;
        }
    }

    async updateToken(piduser, ptoken){
        try{
            await User.update({token: ptoken}, {where : {iduser:piduser}});
        }
        catch(err){
            throw err;
        }
    }
}

//Exports-------------------------------------
module.exports = UserController;