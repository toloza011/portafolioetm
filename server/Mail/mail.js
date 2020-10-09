const nodemailer = require('nodemailer')
const {Email} = require('./plantilla')


//Obtener datos y crear template de email
const formatoEmail = (nombre,email,asunto,mensaje,numero) =>{
   
    data = {
        from: `${nombre} <${email}>`,
        to: "estebantoloza1998@gmail.com",
        subject: `Mensaje de contacto desde Portafolio ETM`,
        html: Email(nombre,email,mensaje,numero)
    }

    return data;
}


//Enviar Email...

const enviarEmail = (nombre,email,asunto,mensaje,numero) =>{
    
    const configEmail = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: "estebantoloza1998@gmail.com",
            pass: "19981121"
        }
    });
    
    const mail = formatoEmail(nombre,email,asunto,mensaje,numero);

    configEmail.sendMail(mail,(error,res)=>{
     if(error){
         console.log(error);
     }else{
         console.log("Mensaje enviado correctamente!");
     }
    });
}

module.exports = {enviarEmail}

