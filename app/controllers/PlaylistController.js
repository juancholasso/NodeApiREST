import BaseController from './BaseController';
const path = require('path');
import Playlist from '../models/Playlist';
import PlaylistSong from '../models/PlaylistSong';

/**
 * ExampleController
 */
class PlaylistController extends BaseController{

    constructor(){
        super();
    }

    /**
     * Create Song
     */
    async createPlaylist(piduser, pname)
    {
        let transaction;
        try{
            transaction = await this.sequelize.transaction();
       
            let playlist = await Playlist.create({
                iduser: piduser,
                name: pname,
            }, {transaction: transaction})

            await transaction.commit();
            
            return playlist;
        }
        catch(err){
            await transaction.rollback();
            throw err;
        }
    }


    /**
     * Get All Song
     */
    async getPlaylists(iduser, page)
    {
        try{
            let playlist = await Playlist.findAll({ 
                where: { iduser: iduser },
                offset: (10*page), limit: 10
            });
            return playlist;
        }
        catch(err){
            throw err;
        }
    }

    /**
     * Get Playlist
     */
    async getPlaylist(iduser, idplaylist, page)
    {
        try{
            let playlist = await Playlist.findOne({ 
                where: { iduser: iduser, idplaylist: idplaylist },
                offset: (10*page), limit: 10,
                include: ['songs']
            });
            return playlist;
        }
        catch(err){
            throw err;
        }
    }

    /**
     * Add songs to Playlist
     */
    async addSongToPlaylist(idplaylist, idsong){
        try{
            let playsong = await PlaylistSong.create({
                idplaylist: idplaylist,
                idsong: idsong
            });
            return true;
        }
        catch(err){
            throw err;
        }
    }

     /**
     * Add songs to Playlist
     */
    async deleteSongToPlaylist(idplaylist, idsong){
        try{
            let playsong = await PlaylistSong.destroy({ where: {
                    idplaylist: idplaylist,
                    idsong: idsong
                }
            });
            return true;
        }
        catch(err){
            throw err;
        } 
    }

    async deletePlaylist(pidplaylist)
    {
        let transaction;
        try{
            transaction = await this.sequelize.transaction();
       
            let playlist = await Playlist.destroy({ where: { idplaylist: pidplaylist } }, {transaction: transaction});

            await transaction.commit();
            
            return playlist;
        }
        catch(err){
            await transaction.rollback();
            throw err;
        }
    }
}

module.exports = PlaylistController;
