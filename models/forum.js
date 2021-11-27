const db = require('../database/database');
const bcrypt = require('bcryptjs');

class Forum {
    constructor(name, description) {

    }

    async save() {
            throw "todo save forum";
    }

    static async fetchAll() {
        let categories = await db.query('SELECT * FROM category ORDER BY category_id');
        let res =[];
        for(const category of categories.rows ){
           let forum = await db.query('SELECT * FROM forum WHERE category_id = $1', [category.category_id]);
           res.push({"category":category,"forum":forum.rows});
        }
        return res;      
    }

    static async findById(id) {
        return db.query('SELECT * FROM forum WHERE forum_id = $1', [id]).then(res => {return res.rows[0];});
        
    }
    static async findByName(name) {
       return db.query('SELECT * FROM forum WHERE name = $1', [name]).then(res=>{return res.rows[0];});
        
    }
};


module.exports = Forum;