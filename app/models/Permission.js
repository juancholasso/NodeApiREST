import Sequelize from 'sequelize';
import sequelize from '../imports/DB.js';

// Model User
var Permission = sequelize.define('Permissions', {
    idpermission: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false
    }
},{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

// export User model for use in other files.
module.exports = Permission;
