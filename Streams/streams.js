const { log } = require('console')
const Fs= require('fs')

const stream = Fs.createReadStream('./Trials/Subfolder/Bigfile.txt',{highWaterMark: 90000})// 90000: 90kb

//default 64kb
//last buffer : remainder
//highWaterMark : control size
//const stream = createReadStream('./Trials/Subfolder/Bigfile.txt',{ highWaterMark: 90000})
//const stream = createReadStream('./Trials/Subfolder/Bigfile.txt',{ encoding: 'utf8'})

stream.on('data',(result)=>{
    log(result)
})

stream.on('error',(result)=>{
    log(result)
})