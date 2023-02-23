var http = require("http");

const PORT = 3001;

module.exports =
  /* AQUÍ DEBAJO YA PUEDES ESCRIBIR TÚ CÓDIGO REEMPLAZANDO EL VALOR DE NULL POR EL SERVIDOR */
  http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (req.url==='/api'){
   
        return
      }
  }).listen(PORT,'localhost')
