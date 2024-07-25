const { log } = require('console')
 const path=require('path')

 log(path.sep)

const filePath=path.join('/Trials','test.txt')

 log(filePath)

 const base = path.basename(filePath)
 log(base)

 const absolute=path.resolve(__dirname,'Trials','test.txt')
 log(absolute)