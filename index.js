/**
 * Environment
 */
import env from './app/config/env'
console.log(process.env.MAIL_USER)
console.log(process.env.MAIL_PASSWORD)
/**
 * Database Connection
*/
import sequelize from './app/imports/DB.js';

/**
 * Libraries
*/
import bodyParser from "body-parser";
import express from 'express';
const app = express();
import fileupload from 'express-fileupload';

/**
 * Express Configuration
*/
app.use(express.static(__dirname+'/app/public')); //Public folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //For api-rest
app.use(fileupload()); //Package for upload files

/**
 * Exporting variables for use with routes
*/
module.exports.express = express;
module.exports.app = app;

/**
 * Models
*/
require('./app/models/Permission.js');
require('./app/models/Role.js');
require('./app/models/User.js');
require('./app/models/UsersHasRoles.js');
require('./app/models/RolesHasPermissions.js');

/**
 * Start Server
 */
async function startServer(){
  try{
    await require('./app/models/Relationships.js');
    await sequelize.sync();
    
    var routerWeb = require('./app/routes/routes.js').router;
    app.use('/', routerWeb);

    //Start only on the first time deploying or when user admin was delete
    // await require('./config/StartData.js');

    app.listen(process.env.PORT, function () {
      console.log(`App listening on port ${process.env.PORT}!`);
    })

  }
  catch(err){
    console.error(err);
  }
}

/**
 * Main Method
 */
startServer();
