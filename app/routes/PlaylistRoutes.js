import express from 'express';
import PlaylistService from '../services/PlaylistService';

const router = express.Router()
const playlistService = new PlaylistService;

router.post('/create', (req, res) => { playlistService.createPlaylist(req, res) });
router.get('/', (req, res) => { playlistService.getPlaylists(req, res) });
router.post('/addsong', (req, res) => { playlistService.addSongToPlaylist(req, res) });
router.post('/removesong', (req, res) => { playlistService.removeSongToPlaylist(req, res) });
router.get('/:idplaylist', (req, res) => { playlistService.getPlaylist(req, res) });
router.delete('/:idplaylist', (req, res) => { playlistService.deletePlaylist(req, res) });

module.exports = router;