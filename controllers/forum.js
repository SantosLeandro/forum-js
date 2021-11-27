const Forum = require('../models/forum');
const Topic = require('../models/topic');
const Post = require('../models/post');

exports.getForum = async function (req, res, next) {
    const id = req.params.id;
    const forum = await Forum.findById(id);
    console.log(forum);
    Topic.findByForumId(id).then((rows) => {
        res.render('forum', {
                    data: rows,
                    forum: forum,
                    session: req.session,
                    isLoggedIn: req.session.isLoggedIn});
    });
};

exports.getPosts = async function (req, res, next) {
    const forumId = req.params.forumId;
    const topicId = req.params.topicId;
    const forum = await Forum.findById(forumId);
    const topic = await Topic.findById(topicId);
    const posts = await Post.findByTopicId(topicId);
    res.render('topic', {
                forum: forum,
                topic: topic,
                posts: posts,
                session: req.session,
                isLoggedIn: req.session.isLoggedIn});
}
