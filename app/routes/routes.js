import index from '../../index';
import passport from 'passport';
import authmiddle from '../middlewares/Authentication.js';

var express = index.express;
var app = index.app;
var router = express.Router();

//Array of routes for permissions
let routes = [];

/**
 * Routes
 */
//Module SignUp, Remember Password
app.use('/', require('./RegisterRoutes') )

//Module Logín Authentication
app.use('/', require('./LoginRoutes') )

/**
 * All routes for /api/* are protected
 * Routes protected -------------------------------------------------
 */
app.use('/api/*', passport.authenticate('jwt', { session: false }));
app.use('/api/*', authmiddle.decodeToken);

//Module Users
app.use('/api/users', require('./UsersRoutes') )

/**
 * End Routes protected ----------------------------------------------
*/

//Health Check
router.get('/health-check', (req, res) => { res.status(200).json({ok: JSON.parse(process.env.errors).health_check })} );

//Errors
router.get('/api/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });
router.post('/api/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });
router.get('/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });
router.post('/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });

module.exports.router = router;
module.exports.routes = routes;