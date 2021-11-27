const db = require('../database/database');
class Topic{
    constructor(){

    }



    static findByForumId(id){
        return db.query('SELECT * FROM topic INNER JOIN user_account ON topic.user_id = user_account.user_id WHERE forum_id = $1 ',[id]).then(res => {return res.rows });
    }

    static findById(id){
      return db.query('SELECT * FROM topic INNER JOIN user_account ON topic.user_id = user_account.user_id WHERE topic.topic_id = $1 ',[id]).then(res => {return res.rows[0] });
    }

}

module.exports = Topic;
