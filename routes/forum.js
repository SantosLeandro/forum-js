const router = require('express').Router();

const forumController = require('../controllers/forum');


router.get('/:id',forumController.getForum);

router.get('/:id/newtopic',(req, res)=>{
    res.render('newtopic');
});

router.get('/:forumId/topic/:topicId', forumController.getPosts);
/*
router.get('/:forumId/topic/:topicId',(req, res)=>{
    res.render('newtopic');
});*/


module.exports = router;
