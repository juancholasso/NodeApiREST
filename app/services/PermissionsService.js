import PermissionsController from '../controllers/PermissionsController.js';

class PermissionsService{

  constructor(){
    this.permissionsController = new PermissionsController;
  }

}


module.exports = PermissionsService;
