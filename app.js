const express = require('express');
const app = express();

const homeRoutes = require('./routes/home');
const adminRoutes = require('./routes/admin');
const accountRoutes = require('./routes/account');
const userRoutes = require('./routes/user');


app.use(express.static('./public'));



app.set('view engine','ejs');
app.set('views','./views');

app.use(express.urlencoded({extended:true}));

app.use('/',homeRoutes);
app.use('/admin',adminRoutes);
app.use('/',accountRoutes);
app.use('/user', userRoutes);

app.listen(3000,()=>{
    console.log("App running");
})