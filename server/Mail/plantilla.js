const Email = (nombre,email,mensaje,numero) =>{

    return `
    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body style="margin: 0; padding: 0;">
        <br>
        <br>
        <div>
            <h1>Hola Esteban</h1>
            <br><br>
            <h4>El usuario ${nombre} te ha enviado el siguiente mensaje: </h4>
            <br><br>
            <p>${mensaje}</p>
        </div>
        <br><br>
        </body>
        </html>
      `
}

module.exports = {Email};