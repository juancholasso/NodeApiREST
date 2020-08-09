import Sequelize from 'sequelize';
import sequelize from '../imports/DB.js';

// Model User
var Playlist = sequelize.define('Playlist', {
    idplaylist: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    iduser: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false
    }
},{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

// export User model for use in other files.
module.exports = Playlist;

