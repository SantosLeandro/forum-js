const db = require('../database/database');
const bcrypt = require('bcryptjs');

class Category {
    constructor(name, description) {

    }

    async save() {
            throw "todo save category";
    }

    static async fetchAll() {
        const res = await db.query('SELECT * FROM category');
        return res.rows;
    }

    static async findById(id) {
        const res = await db.query('SELECT * FROM category WHERE category_id = $1', [id]);
        return res.rows[0];
    }
    static async findByName(name) {
        const res = await db.query('SELECT * FROM category WHERE name = $1', [name]);
        return res.rows[0];
    }
};


module.exports = Category;