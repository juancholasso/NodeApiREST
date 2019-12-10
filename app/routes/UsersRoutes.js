import express from 'express';
import UserService from '../services/UserService';

const router = express.Router()
const userService = new UserService;

router.post('/', (req, res) => { userService.getUsers(req, res) });

module.exports = router
