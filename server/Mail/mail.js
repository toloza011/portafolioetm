const nodemailer = require('nodemailer')
const {Email} = require('./plantilla')
const hbs = require('nodemailer-express-handlebars');

//Obtener datos y crear template de email
const formatoEmail = (nombre,email,asunto,mensaje,telefono) =>{
   
   let mailOptions = {
       from: email,
       to: 'estebantoloza1998@gmail.com',
       subject: asunto,
       text: mensaje
   }

    return mailOptions;
}


//Enviar Email...

const enviarEmail = (nombre,email,asunto,mensaje,telefono) =>{
    
    const configEmail = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "estebantoloza1998@gmail.com",
            pass: "19981121"
        }
    });
  
    
    const mail = formatoEmail(nombre,email,asunto,mensaje,telefono);

    configEmail.sendMail(mail,(error,res)=>{
     if(error){
         console.log(error);
     }else{
         console.log("Mensaje enviado correctamente!");
         console.log(mail);
     }
    });
}

module.exports = {enviarEmail}

