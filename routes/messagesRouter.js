const express = require('express');
const  {messages} = require('./indexRouter');
const router = express.Router();

router.get('/:id', (req, res,next) => {
    const index = Number(req.params.id);
    req.index = index;
    next();
    
});

router.get('/:id', (req, res,next) => {
    
    if(req.index<0 || req.index>=messages.length){
        res.status(404).send('message not found');
    }else next();  
    
    
});

router.get('/:id', (req, res) => {
    const message = messages[req.index];
    res.render('messageDetails', { message });
});

module.exports = router;