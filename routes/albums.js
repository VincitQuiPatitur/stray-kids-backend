const router = require('express').Router();

const {
    getAlbums,
    getAlbumById
} = require('../controllers/albums');

router.get('/', getAlbums);
router.get('/:id', getAlbumById);

module.exports = router;