import express from 'express';
import SongService from '../services/SongService';

const router = express.Router()
const songService = new SongService;

router.get('/', (req, res) => { songService.getSongs(req, res) });
router.get('/user', (req, res) => { songService.getSongsByUser(req, res) });
router.post('/create', (req, res) => { songService.createSong(req, res) });
router.delete('/:idsong', (req, res) => { songService.deleteSong(req, res) });

module.exports = router;