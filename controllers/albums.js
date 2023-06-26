const Album = require('../models/album');

module.exports.getAlbums = (req, res) => {
    Album.find({})
        .then(albums => {
            res.json(albums);
        })
        .catch(err => {
            console.error('Ошибка при получении данных из базы данных:', err);
            res.sendStatus(500);
        });
};

module.exports.getAlbumById = (req, res) => {
    const { id } = req.params;
    Album.findOne({ id: id })
        .then((album) => {
            if (!album) {
                console.error('Альбом с указанным albumId не найден');
                return;
            }
            res.send(album);
        })
        .catch((err) => {
            console.error('Ошибка при получении данных из базы данных:', err);
            res.sendStatus(500);
        });
};