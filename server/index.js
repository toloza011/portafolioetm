const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const nodeMailer = require('nodemailer')
const cookieParser = require('cookie-parser')


//configuraciones para trabajar
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());
app.use(cookieParser());
const {enviarEmail} = require('./Mail/mail')


//rutas 
app.post('/api/enviarEmail',(req,res)=>{
    
   if(req.body.nombre != '', req.body.email != '',req.body.asunto != '',req.body.mensaje != '',req.body.numero != ''){
    enviarEmail(req.body.nombre, req.body.email, req.body.asunto, req.body.mensaje, req.body.numero);
    return res.json({
      mensaje: "Correo enviado correctamente",
      status: 200
    });
   }else{
    return res.json({
      mensaje: "Complete todos los campos para poder enviar el mensaje.",
      status: 500
    });
   }
   
});




//arrancar el servidor
app.listen(6000, () => {
  console.log("Servidor corriendo en el puerto 6000");
});
