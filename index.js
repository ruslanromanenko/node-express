const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const app  = express();

const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});

app.get('/', (req, res)=>{
    res.render('index')
});

app.engine('hbs', hbs.engine);
app.set('view engine',  'hbs');
app.set('views', 'views');

const PORT = process.env.PORT || 3000;

app.get('/about', (req, res)=>{
    res.render('about')
});

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
});
