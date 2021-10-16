const path = require('path');

const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');
const accountRoutes = require('./routes/account');
const forumRoutes = require('./routes/forum');
const userRoutes = require('./routes/user');

app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views','views');


app.use('/forum', forumRoutes);
app.use('/',homeRoutes);
app.use('/admin',adminRoutes);
app.use('/',accountRoutes);
app.use('/user', userRoutes);


app.listen(3000,()=>{
    console.log("App running");
})