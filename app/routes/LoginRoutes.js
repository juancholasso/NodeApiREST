import express from 'express';
import AuthenticationService from '../services/AuthenticationService';

const router = express.Router()
const authenticationService = new AuthenticationService

router.post('/login', (req, res, next)=>{ authenticationService.login(req,res,next) })
router.get('/api/logout', (req, res)=>{ authenticationService.logout(req,res) })


module.exports = router
