/**
 * Environment
 */
import env from './app/config/env'

/**
 * Database Connection
*/
import sequelize from './app/imports/DB.js';

/**
 * Libraries
*/
import express from 'express';
const app = express();
import fileupload from 'express-fileupload';
import Passport from './app/middlewares/Passport';
import bodyParser from "body-parser";


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
require('./app/models/User.js');

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
