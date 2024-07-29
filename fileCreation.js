const {writeFile, writeFileSync} = require('fs')

for(i=0;i<=10000;i++){
    writeFileSync('./Trials/Subfolder/Bigfile.txt',`hello wrold ${i}\n`,{flag:'a'})
}