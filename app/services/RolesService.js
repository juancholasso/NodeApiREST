import RolesController from '../controllers/RolesController.js';
import PermissionsController from '../controllers/PermissionsController';
/**
 * Services for app web
 */

class RolesService{

    constructor(){
        this.rolesController = new RolesController;
        this.permissionsController = new PermissionsController;
    }

    //Services api rest ----------------------------------------------------
    async getRolesApi(req, res){
        try{
            let roles = await rolesController.getRoles();
            res.json(roles);
        }
        catch(err){
            console.log(err);
            res.status(500).json({ error: err });
        }
    }
}


module.exports = RolesService;