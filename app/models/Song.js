import Sequelize from 'sequelize';
import sequelize from '../imports/DB.js';

// Model User
var User = sequelize.define('Song', {
    idmusic: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true
    },
    iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    },
    url:{
        type: Sequelize.TEXT,
        allowNull: true,
        defaultValue: null,
    }
},{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

// export User model for use in other files.
module.exports = User;

