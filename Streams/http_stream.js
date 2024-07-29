var http = require('http')
var fs= require('fs')
const { log } = require('console')

http.createServer(function (req,res){
    // const text=fs.readFileSync('./Trials/Subfolder/Bigfile.txt','utf8')
    // res.write(text)

    const fileStream = fs.createReadStream('./Trials/Subfolder/Bigfile.txt',{encoding:'utf8'})
    fileStream.on('open',()=>{
        fileStream.pipe(res)
    })
    fileStream.on('error',(err)=>{
        res.end(err)
    })

//res.end()
}).listen(8080)