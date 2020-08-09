import BaseService from './BaseService';
import PlaylistController from '../controllers/PlaylistController';
import fs from 'fs';
/**
 * Services for app web
 */

class PlaylistService extends BaseService{

    constructor(){
        super();
        this.playlistController = new PlaylistController;
    }
   
    async createPlaylist(req, res){
        try{
            let user = req.payload.data;

            let playlist = await this.playlistController.createPlaylist(
                user.iduser, 
                req.body.name
            );
            res.status(201).json({"playlist": playlist});
        }
        catch(err){
            this.logger.error("createPlaylist@PlaylistService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

    async getPlaylists(req, res){
        try{
            let user = req.payload.data;

            let playlists = await this.playlistController.getPlaylists(user.iduser, req.query.page || 0);
            res.status(200).json({"playlists": playlists});
        }
        catch(err){
            this.logger.error("getPlaylists@PlaylistService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

    async getPlaylist(req, res){
        try{
            let user = req.payload.data;

            let playlist = await this.playlistController.getPlaylist(
                user.iduser,
                req.params.idplaylist,
                req.query.page || 0
            );
            res.status(200).json({"playlist": playlist})
        }
        catch(err){
            this.logger.error("getPlaylist@PlaylistService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

    async addSongToPlaylist(req, res){
        try{
            console.log("hola")
            let query = await this.playlistController.addSongToPlaylist(req.body.idplaylist, req.body.idsong);
            res.status(200).json({})
        }
        catch(err){
            this.logger.error("getPlaylist@PlaylistService "+ JSON.stringify(err)+err);
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

    async removeSongToPlaylist(req, res){
        try{
            console.log("hola")
            let query = await this.playlistController.deleteSongToPlaylist(req.body.idplaylist, req.body.idsong);
            res.status(200).json({})
        }
        catch(err){
            this.logger.error("removeSongToPlaylist@PlaylistService "+ JSON.stringify(err)+err);
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

    async deletePlaylist(req,res){
        try{
            let query = await this.playlistController.deletePlaylist(req.params.idplaylist);
            res.status(200).json({})
        }
        catch(err){
            this.logger.error("getPlaylist@PlaylistService "+ JSON.stringify(err)+err);
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

}

module.exports = PlaylistService;
