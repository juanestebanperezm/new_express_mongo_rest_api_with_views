const express=require('express')
const app=express()
const path=require('path')
const morgan=require('morgan')
const mongoose=require('mongoose');



//
const indexRoutes=require('../src/routes/index')

//Mongoose
mongoose.connect(`mongodb://localhost/crud-mongo`)
    .then(db=>console.log('conectada con exito'))
    .catch(err=>console.log('error de conexion'))



//Paths Config
app.set('port',process.env.PORT||3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs')




//Morgan set
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));




//Rutas
app.use('/',indexRoutes);






app.listen( app.get('port'),()=>{console.log(`server on ${app.get('port')}`)})