import express from 'express';
import passport from 'passport';
import authenticationHelper from '../helpers/AuthenticationHelper';

const router = express.Router()

router.post('/login', (req, res, next)=>{
    passport.authenticate('login', (err, user, info)=>{
        if(err)
            return res.status(500).json({error: JSON.parse(process.env.errors).internal_server_error });
        if(!user)
            return res.status(401).json({error: JSON.parse(process.env.errors).user_pass_invalid });
        let token = authenticationHelper.generateJWT(user);
        return res.status(200).json({token:token});
    })(req, res, next)
})

module.exports = router
