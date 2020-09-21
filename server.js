const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const hbs = require('hbs'); 
const { registerPartials } = require('hbs');


app.use(express.static( __dirname + '/PUBLIC'));

hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine','hbs');

app.get('/', (req, res) => {

    res.render('home', {
    })
});

app.get('/about',(require, res) => {
    res.render('about', {
    });
});

app.get('/blog',(require, res) => {
    res.render('blog', {
    });
});

app.get('/contact',(require, res) => {
    res.render('contact', {
    });
});

app.get('/documentation',(require, res) => {
    res.render('documentation', {
    });
});

app.get('/portfolio',(require, res) => {
    res.render('portfolio', {
    });
});

app.get('/items',(require, res) => {
    res.render('items', {
    });
});


app.listen(port)
console.log(`Server escuchando en http://localhost:${port}/`);