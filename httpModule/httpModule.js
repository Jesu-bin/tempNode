const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('Welcome to HomePage')
    }
    else if(req.url==='/about'){
      res.write('About Page')
    }
    else{
        res.write(`<h1>Oopss!</h1><p>Error!!!</p><a href="/">BackHome</a>`)
    }
    res.end()
})

server.listen(8080) 