///These lines of codes were comented because Github doesnot support dynamic websites that shares binary data

/*const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');

const env = require('dotenv').config;

const app = express();
const log = console.log

const PORT = process.env.PORT || 3000;

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, () => {
    log(' You are listening on Port  ' + PORT)
});
// Render home page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/')
  });

  app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'contact.html'));
    log('this the form that shows')
});

// Email sent page
app.post('/', (req, res) => {
    log('Message Sent')
    
    const transporter = nodemailer.createTransport(smtpTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      auth: {
        user: 'punchysmart@gmail.com',
        pass: 'PUNCHY504?'
      }
    }));
    const user_email = req.body.text;
    const mailOptions = {
      from: req.body.mail,
      to: 'example@gmail.com',
      subject: req.body.mail,
      text: req.body.text, 
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });  


//res.redirect('/contact')
});
*/
