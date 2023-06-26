require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const port = 3000;
const cors = require('cors');
const compression = require('compression');

const router = require('./routes/index');
const mongoURL = process.env.MONGO_URL;

mongoose.set('strictQuery', true);
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Соединение с MongoDB установлено');
        app.listen(port, () => {
            console.log(`Сервер запущен на порту ${port}`);
        });
    })
    .catch((err) => {
        console.error('Ошибка при подключении к MongoDB:', err);
    });

const app = express();

app.use(cors());
app.use(compression());
app.use(router);

/*
app.get('/api/members', (req, res) => {
    Member.find({})
        .then(members => {
            res.json(members);
        })
        .catch(err => {
            console.error('Ошибка при получении данных из базы данных:', err);
            res.sendStatus(500);
        });
});*/
