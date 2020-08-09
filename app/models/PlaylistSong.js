import Sequelize from 'sequelize';
import sequelize from '../imports/DB.js';

// Model User
var PlaylistSong = sequelize.define('PlaylistSongs', {
    idplaylist: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    idsong: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    }
},{
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
});

module.exports = PlaylistSong;

