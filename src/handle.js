module.exports = (request, response) => {

    let html = `
        <!DOCTYPE "html">
        <html>
            <head>
                <title>App com Http e Nodejs</title>
            </head>
            <body>
                <h1>Olá, Bem vindo ao módulo http do nodejs</h1>
            </body>
        </html>
    `;

    response.writeHead(200, { "Content-Type" : "text/html; charset=utf-8" }); 
    response.write(html); 
    response.end(); 
};

