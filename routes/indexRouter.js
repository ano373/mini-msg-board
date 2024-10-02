const express = require('express');
const router = express.Router();


const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

router.get('/new', (req,res) =>{
    res.render('form');

});

router.post('/new', (req,res)=>{
    const message = req.body.message;
    const user = req.body.name;
    messages.push({text: message, user: user, added : new Date()});
    res.redirect('/');

});


module.exports = {
    router,
    messages
};
