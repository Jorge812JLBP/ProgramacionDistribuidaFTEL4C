require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const md5 = require('md5')
const { appConfig } = require('./lib/config')
const connection = require('./db/mysql.js')

app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/registro', function(req, res) {
    res.render('registro');
});

app.get('/alta', function(req,res){
    res.render('alta');
})

app.get('/guardadas',function(req,res){
    connection.query('SELECT * FROM peliculas' ,function(err, result, fields){
        console.log(result[1] ['titulo'], result[1]['descripcion'], result[1]['fechaestreno'])
            res.render('guardadas',{data:result})

    })
})

app.get('/404', function(req, res) {
    res.render('404');
});

app.post('/registroUser', function(req, res) {
    if(req.body.registro == ""){
        let password  = md5(req.body.password) //Ciframos la contraseña.
        //Realizamos la query del insert de los datos enviados.
        connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',[req.body.username, req.body.email, password], function(err, result, fields){
            
            if (err) throw err; //Si hay un error, lo muestra
            res.redirect('/')
            
        })
       }else{
        res.redirect('/')
       }
});


app.post('/altapeliculas', function(req, res) {
    if(req.body.alta == ""){
        //Realizamos la query del insert de los datos enviados.
        connection.query('INSERT INTO peliculas (titulo, descripcion, fechaestreno) VALUES (?, ?, ?)',[req.body.titulo, req.body.descripcion, req.body.fecha], function(err, result, fields){
            
            if (err) throw err; //Si hay un error, lo muestra
            res.redirect('/')
            
        })
       }
});

/*
app.post('/altapelis', function(req, res){
    connection.query('SELECT * FROM peliculas' ,function(err, result, fields){
            
        if (err) throw err;
        res.redirect('/')
        
    })
});
*/


app.post('/auth', function(req, res) {

    if(req.body.sesion == ""){
        let password = md5(req.body.password)
           res.render('ingreso', {correo: req.body.email, password: password});
           }else{
               res.redirect('/registro')
           }
          
});

app.listen(appConfig.port, ()=> console.log(`Puesto en marcha en puerto ${appConfig.port}`)) 
