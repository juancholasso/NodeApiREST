import Logger from '../imports/Logger';
/**
 * Services for app web
 */

class BaseService{

    constructor(){
        this.logger = Logger.getLogger();
    }
}

module.exports = BaseService;
