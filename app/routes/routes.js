import index from '../../index';

var express = index.express;
var app = index.app;
var router = express.Router();

//Array of routes for permissions
let routes = [];

//Routes for ApiRest
app.use('/api/', require('./LoginRoutes') )
app.use('/api/', require('./UsersRoutes') )

//Route for health-check
router.get('/health-check', (req, res) => { res.status(200).json({ok: JSON.parse(process.env.errors).health_check })} );

//Routes for errors
router.get('/api/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });
router.post('/api/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });

router.get('/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });
router.post('/*', (req, res) => { res.status(404).json({"error": JSON.parse(process.env.errors).service_not_found }) });

module.exports.router = router;
module.exports.routes = routes;