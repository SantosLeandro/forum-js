const User = require('../models/user');

exports.getAllUsers = function (req, res, next) {
    User.fetchAll().then((rows) => {
        console.log("count " + rows.length);
        res.send(JSON.stringify(rows));
    });
};

exports.getUserById = async function (req, res, next) {
    const id = req.params.id;
    User.findById(id).then((rows) => {
        if(rows)
            res.send(JSON.stringify(rows));
        else res.send('User not found');
    });
};

exports.signup = async function (req, res, next) {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    if(!username || !email || !password)
        return res.render('signup',{msg:"Campos em branco"});

    const user = new User(username, email, password);
    user.save().then((saved) => {
        console.log("saved",saved);
        if (!saved.error)
            res.render('signup',{msg:"usuario registrado com sucesso."});
        else
        res.render('signup',{msg:saved.msg});
    })
}

exports.login = function (req, res) {
      const username = req.body.username;
      const password = req.body.password;

      User.loginUser(username, password).then(user=>{
          if(user){
              req.session.isLoggedIn = true;
              req.session.username = user.username;
              req.session.user_id = user.user_id;
              req.session.save((err)=>{
                  res.redirect('/');
              });            
          }
          else{
            console.log("LOGGIN ERROR");
            req.session.isLoggedIn = false;
            res.render('login',{msg:'Usuário ou senha inválidos!'});
          }
      })    
}

exports.logout = async function (req, res) {
    req.session.isLoggedIn = false;
    req.session.save((err)=>{
        res.redirect('/');
        req.session.destroy();
    })
  
}
