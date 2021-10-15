const db = require('../database/database');

class User{
    constructor(name, email, password){
        this.name = name;
        this.email = email;
        this.password = password;
    } 

    save(callback){
        db.query('INSERT INTO users (name, email, password, created_at, modified_at) values ($1, $2, $3, now(), now())',
        [this.name, this.email, this.password],callback);
    }

    static update(id, name, email){
        db.query('UPDATE users SET name = $1, email = $2, modified_at = NOW() WHERE id = $3', 
        [name, email, id], (err, res) =>{
            console.log(err,res);
        });
    }

    static updatePassword(id, password){
        db.query('UPDATE users SET password = $1, modified_at = NOW() WHERE id = $2', 
        [password, id], (err, res) =>{
            console.log(err,res);
        }); 
    }

    static findById(id, callback){
        db.query('SELECT * FROM users WHERE id = $1',[id],callback);
    }

    static findByName(name){

    }

    

};

module.exports = User;