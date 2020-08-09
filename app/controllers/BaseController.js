import bcrypt from 'bcrypt';
import sequelize from '../imports/DB.js';
import Logger from '../imports/Logger';
import ValidatorModels from '../helpers/ValidatorModels';
import ValidatorFiles from '../helpers/ValidatorFiles';
import FileHelper from '../helpers/FileHelper';
import GeneralHelper from '../helpers/GeneralHelper';
/**
 * ExampleController
 */
class BaseController{

    constructor(){
        this.sequelize = sequelize;
        this.bcrypt = bcrypt;
        this.validatorModels = ValidatorModels;
        this.validatorFiles = ValidatorFiles;
        this.logger = Logger.getLogger();
        this.fileHelper = FileHelper;
        this.generalHelper = GeneralHelper;
    }
   
}
//Get list with all roles

module.exports = BaseController;
