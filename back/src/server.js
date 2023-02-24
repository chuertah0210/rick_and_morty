const http = require("http");
//const caharacters  = require('./utils/data')
const getCharById = require('./controllers/getCharById')
const getCharDetail =require('./controllers/getCharDetail')

const PORT = 3001;
  http.createServer((req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    let id = req.url.split ('/').at(-1)
    if (req.url.includes('onsearch')){
        getCharById(res,id)
    }
    if (req.url.includes('detail')){
      getCharDetail(res,id)
    }


  }).listen(PORT,'localhost')




//bloque hw integracion 1 m3
     // if (req.url.includes('rickandmorty/character')){
    //     let id = req.url.split ('/').at(-1)
    //     let characterFilter= caharacters.filter(char=>char.id === Number(id) )
    //     res.writeHead(200, {'Content-Type': 'application/json'}).end(JSON.stringify(characterFilter[0]));
    //     return
    //   }