import BaseService from './BaseService';
import SongController from '../controllers/SongController';
import fs from 'fs';
/**
 * Services for app web
 */

class SongService extends BaseService{

    constructor(){
        super();
        this.songController = new SongController;
    }
   
    async createSong(req, res){
        try{
            // var validator = await this.validatorModels.validateAdventure(req.body);
            // var check = await validator.check();
            // if(!check)
            //     res.status(400).json({"error":validator.errors});
            var file = req.files.song;
            let user = req.payload.data;

            console.log(file, req.body.name)

            let song = await this.songController.createSong(
                user.iduser, 
                req.body.name,
                file
            );
            res.status(201).json({"song": song});
        }
        catch(err){
            this.logger.error("createSong@SongService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

    async getSongs(req, res){
        try{
            let songs = await this.songController.getSongs(req.query.page || 0);
            res.status(200).json({"song": songs});
        }
        catch(err){
            this.logger.error("getSongs@SongService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }

    async getSongsByUser(req, res){
        try{
            let user = req.payload.data;
            let songs = await this.songController.getSongsByUser(user.iduser,req.query.page || 0);
            res.status(200).json({"song": songs});
        }
        catch(err){
            this.logger.error("getSongs@SongService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }


    async deleteSong(req, res){
        try{
            let user = req.payload.data;
            let song = await this.songController.deleteSong(req.params.idsong);
            res.status(200).json({"song": song});
        }
        catch(err){
            this.logger.error("getSongs@SongService "+ JSON.stringify(err));
            res.status(500).json({"error":JSON.parse(process.env.errors).internal_server_error});
        }
    }
}

module.exports = SongService;
