const bcrypt = require('bcrypt');
var User = require('../models/User.js');

async function StartData(){
    //Creating the first user
    try{
        await User.create({
            iduser: process.env.ADMIN_IDUSER,
            password: bcrypt.hashSync(process.env.ADMIN_PASSWORD,10),
            name: process.env.ADMIN_NAME,
            lastname: process.env.ADMIN_LASTNAME,
            email: process.env.ADMIN_EMAIL,
            telephone: process.env.ADMIN_TELEPHONE,
            iddocument: process.env.ADMIN_IDDOCUMENT,
            nickname: process.env.NICKNAME,
        });
    }
    catch(err){
        console.log(err);
        console.log("**--The user "+ process.env.ADMIN_EMAIL +" already was created--**");
    }
    //Asigning the role created to user create

    console.log("**--Please login with these credentials--**");
    console.log("**--email: "+ process.env.ADMIN_EMAIL +" --**");
    console.log("**--pass: "+ process.env.ADMIN_PASSWORD +" --**");
}

module.exports = StartData();
