const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const cookieParser = require('cookie-parser')


//configuraciones para trabajar
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.use(cookieParser());
const {enviarEmail} = require('./Mail/mail')
var serv = require('http').Server(app);
const port = 4000;

//rutas 
app.post('/api/enviarEmail',(req,res)=>{
    
   
   console.log(req.body);
   
   if(req.body.nombre != '', req.body.email != '',req.body.asunto != '',req.body.mensaje != '',req.body.numero != ''){
    /*var email = enviarEmail(req.body.nombre, req.body.email, req.body.asunto, req.body.mensaje, req.body.telefono);
    return res.json({
      mensaje: "Correo enviado correctamente",
      status: 200,
    });+*/
    console.log("Datos recibidos correctamente!");
   }else{
    /*return res.json({
      mensaje: "Complete todos los campos para poder enviar el mensaje.",
      status: 500
    });
    */
   console.log("Los campos no pueden estar vacios!");
   }
   
});
app.post('/test',(req,res)=>{
 var nombre = req.body.nombre;
 res.send('Hola ',+nombre);

});


app.listen(port,()=>{
   console.log("Servidor corriendo en el puerto "+port);
});
