const express = require('express');
const router = express.Router();


let messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date(),
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date(),
    }
];

router.get("/", (req,res) =>{
  res.render('index', { title: "Mini Messageboard", messages: messages });
});


router.get('/new', (req,res) =>{
    res.render('form');

  });

router.post('/new', (req,res)=>{
    const message = req.body.message;
    const user = req.body.name;
    messages.push({text: message,
                  user: user,
                  added : new Date(),
                  id :messages.length});
    res.redirect('/');

});


module.exports = {
    router,
    messages
};
