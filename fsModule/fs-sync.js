const {log} =require('console')

const fs =require('fs')

const first = fs.readFileSync('./Trials/Subfolder/First.txt','utf8')
const second = fs.readFileSync('./Trials/Subfolder/Second.txt','utf8')

fs.writeFileSync('./Trials/Subfolder/Third.txt',`This is created by code with the file :${first},${second}`)

