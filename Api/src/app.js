const express = require('express');
const app = express();

const mongoose= require('mongoose');
const morgan =require('morgan');
const indexRouter = require('./routes/index');
//configuraciones
app.set('port', process.env.PORT || 3000);
mongoose.connect('mongodb+srv://root:root@cluster0.0zjbz.mongodb.net/Cluster0?retryWrites=true&w=majority')
.then(db => console.log('conectado'))
.catch(err => console.log('err'));


//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));



//rutas
//app.get('/', (req,res)=>{
//    res.send('hola nubaasssssaaaaadsssssi');
//})

app.use('/', indexRouter);


//inicializacion del servidor
 app.listen(app.get('port'), ()=>{
     console.log('server started');     
 });

