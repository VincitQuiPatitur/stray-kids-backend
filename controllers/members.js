const Member = require('../models/member');

module.exports.getMembers = (req, res) => {
    Member.find({})
        .then(members => {
            res.json(members);
        })
        .catch(err => {
            console.error('Ошибка при получении данных из базы данных:', err);
            res.sendStatus(500);
        });
};