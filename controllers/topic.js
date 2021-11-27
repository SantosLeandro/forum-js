const Topic = require('../models/topic');

exports.getAllTopics = async function (req, res, next) {
    const id = req.params.id;
    Topic.findByForumId(id).then((rows) => {
        res.render('forum', {
                    data: rows,
                    forum: forum,
                    session: req.session,
                    isLoggedIn: req.session.isLoggedIn});
    });
};
