import BaseController from './BaseController';
const path = require('path');
import Song from '../models/Song';

/**
 * ExampleController
 */
class SongController extends BaseController{

    constructor(){
        super();
        this.pathPhotoProfile = "./public/uploads/songs/";
    }

    /**
     * Create Song
     */
    async createSong(piduser, pname, pfile )
    {
        let transaction;
        try{
            transaction = await this.sequelize.transaction();
             //Validate if extension photo is allowed
            // await this.validatorFiles.validatePhoto(file);
            //Name of file photo
            var nameFile = this.generalHelper.getStringDate()+"_song."+this.fileHelper.getExtensionOfMimeType(pfile.mimetype);
            console.log(nameFile);
            //Move file to storage
            pfile.mv(this.pathPhotoProfile+nameFile);
            //Create song on db
            let song = await Song.create({
                iduser: piduser,
                name: pname,
                url: nameFile
            }, {transaction: transaction})

            await transaction.commit();
            
            return song;
        }
        catch(err){
            await transaction.rollback();
            throw err;
        }
    }


    /**
     * Get All Song
     */
    async getSongs(page)
    {
        try{
            let songs = await Song.findAll({ offset: (10*page), limit: 10,});
            return songs;
        }
        catch(err){
            throw err;
        }
    }

    /**
     * Get songs by user
     * @param {*} iduser 
     * @param {*} page 
     */
    async getSongsByUser(iduser, page){
        try{
            let songs = await Song.findAll({ 
                where: { iduser: iduser },
                offset: (10*page), limit: 10
            });
            return songs;
        }
        catch(err){
            throw err;
        }
    }

     /**
     * delete songs
     * @param {*} page 
     */
    async deleteSong(idsong){
        try{
            let song = await Song.update({ 
                iduser: 0
            }, {where : {idmusic:idsong}},);
            return song;
        }
        catch(err){
            throw err;
        }
    }
}

module.exports = SongController;
