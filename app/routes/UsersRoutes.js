import express from 'express';
import passport from 'passport';
import authmiddle from '../middlewares/Authentication.js';
import UserService from '../services/UserService';

const router = express.Router()
const userService = new UserService;

router.use('/users', passport.authenticate('jwt', { session: false }));
router.use('/users', authmiddle.decodeToken);
router.post('/users', (req, res) => { userService.getUsers(req, res) });

module.exports = router
