const {log} = require('console')

const fs=require('fs')

fs.readFile('../Trials/Subfolder/First.txt','utf8',(err,result)=>{
if(err){
    log(err)
    return
}
const first =result
    fs.readFile('../Trials/Subfolder/Second.txt','utf8',(err,result)=>{
        if(err){
            log(err)
            return
        }
        const second=result

        fs.writeFile('../Trials/Subfolder/Fourth.txt',`This is newly generated:${first},${second}`,(err,result)=>{
            if(err){
                log(err)
                return
            }
            log(result)
        })
    })
})