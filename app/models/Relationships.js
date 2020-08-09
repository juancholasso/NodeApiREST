import User from './User';
import Song from './Song';
import Playlist from './Playlist';


/**
 * Relation User has many Songs
 */
User.hasMany(Song,{as:"songs", foreignKey: 'iduser', sourceKey: 'iduser'});
Song.belongsTo(User,{as:"user", foreignKey: 'iduser'});

/**
 * Relation User has many Playlist
 */
User.hasMany(Playlist,{as:"playlists", foreignKey: 'iduser', sourceKey: 'iduser'});
Playlist.belongsTo(User,{as:"user", foreignKey: 'iduser'});

/**
 * Playlist has many songs, and songs belongs to many playlist
 */
Playlist.belongsToMany(Song, { as:'songs', through: 'PlaylistSongs', foreignKey:'idplaylist', sourceKey:'idplaylist' });
Song.belongsToMany(Playlist, { as:'playlist', through: 'PlaylistSongs', foreignKey:'idsong', sourceKey:'idmusic' });
