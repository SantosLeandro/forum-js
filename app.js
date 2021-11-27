const path = require('path');

const express = require('express');
const app = express();

const db = require('./database/database');

const expressSession = require('express-session');
const pgSession = require('connect-pg-simple')(expressSession);

const accountRoutes = require('./routes/account');
const homeRoutes = require('./routes/home');
const forumRoutes = require('./routes/forum');
const topicRoutes = require('./routes/topic');
const errorController = require('./controllers/error');

app.use(expressSession({
  store: new pgSession({
    pool : db,
    tableName : 'session'
  }),
  secret: '1234',
  resave: false,
  cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 }
}));

app.set('view engine','pug');
app.set('views','views');

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'node_modules/@fortawesome/fontawesome-free')));
app.use(express.static(path.join(__dirname,'public')));


app.use(accountRoutes);
app.use(homeRoutes);
app.use('/forum',forumRoutes);
app.use(topicRoutes);
app.use(errorController.get404);

app.listen(3000, ()=>{
  console.log("Server running");
});
