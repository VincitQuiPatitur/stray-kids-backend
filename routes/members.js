const router = require('express').Router();

const {
    getMembers
} = require('../controllers/members');

router.get('/', getMembers);

module.exports = router;