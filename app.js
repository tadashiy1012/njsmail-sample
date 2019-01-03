require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const mail = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

app.set('ejs', ejs.renderFile);
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index.ejs', {});
});

app.post('/sendmail', (req, res) => {
    console.log(req.body);
    const msg = {
        from: req.body.mail,
        to: 'yama0123@mail.com',
        subject: 'mail send test from nodejs',
        text: req.body.body
    };
    mail.sendMail(msg, (err, info) => {
        console.log(err);
        console.log(info);
    });
    res.send('ok');
});

app.listen(3000, () => console.log('server start on 3000'));