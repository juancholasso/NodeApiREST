import Sequelize from 'sequelize';
import sequelize from '../imports/DB.js';

// Model User
var UsersHasRoles = sequelize.define('UsersHasRoles', {
    iduser: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    idrol: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
},{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

// export User model for use in other files.
module.exports = UsersHasRoles;

