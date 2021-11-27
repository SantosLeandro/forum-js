const db = require('../database/database');
const bcrypt = require('bcryptjs');

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    async save() {
       let userFound =  await this.checkIfExists(this.username, this.email);
       if(userFound) {
            return {error:1,msg:userFound};
        } 
        else {
            let salt = bcrypt.genSaltSync(10);
            let hash = bcrypt.hashSync(this.password, salt);
            let res = await db.query(
                'INSERT INTO user_account (username, email, password, created_at, modified_at) VALUES ($1 , $2, $3, NOW(), NOW())',
                [this.username, this.email, hash]).then((err,res)=>{
                    console.log('err',err);
                    if(err) return(err);
                });
                console.log("VEJA BEM",res);
            return res;
        }                  
    }

    static fetchAll() {
        return  db.query('SELECT * FROM user_account').then(res=>{return res.rows});
    }

    static findById(id) {
        return db.query('SELECT * FROM user_account WHERE user_id = $1', [id]).then(res=>{return res.rows[0]});
    }
    static findByName(name) {
        db.query('SELECT * FROM user_account WHERE username = $1', [name]).then(res=>{return res.rows[0];});      
    }

    static findByEmail(email) {
        db.query('SELECT * FROM user_account WHERE email = $1', [email]).then(res=>{return res.rows[0];});    
    }

    static async loginUser(name, password){
        const user = await db.query('SELECT * FROM user_account WHERE username = $1', [name]);
        if(!user) return false;
        return bcrypt.compare(password, user.rows[0].password).then(res=>{
            if(res) { console.log(user.rows[0]); return user.rows[0]; }
            else return false;
        });
    }

    checkIfExists(username, email) {
        return new Promise((resolve)=>{
            db.query('SELECT * FROM user_account WHERE username = $1 or email = $2',[username,email]).then((res)=>{
                if(res.rowCount != 0){
                    let msg = [];
                    if(res.rows[0].email == email) msg.push("Email já cadastrado");
                    if(res.rows[0].username == username) msg.push("username já cadastrado");
                    resolve(msg);
                }
                else resolve(null);
            });
            
        })
    }
};


module.exports = User;