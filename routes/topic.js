const router = require('express').Router();

const topicController = require('../controllers/topic');


router.get('/newtopic',(req, res)=>{
    res.render('newtopic');
});

router.get('/topic/:id', (req, res)=>{
  res.render('home');
});





module.exports = router;
