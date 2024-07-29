const startTime =Date.now()
const record1= new Promise((resolve,reject)=>{
    for(i=0;i<100;i++){
        for(j=0;j<100;j++){
            console.log(`${i}${j}`)
        }
    }
    resolve(Date.now()-startTime)
})
const record2= new Promise((resolve,reject)=>{
    for(k=0;k<100;k++){
        for(l=0;l<100;l++){
            console.log(`${k}${l}`)
        }
    }
    resolve(Date.now()-startTime)
})
const record3= new Promise((resolve,reject)=>{
    for(m=0;m<100;m++){
        for(n=0;n<100;n++){
            console.log(`${m}${n}`)
        }
    }
    resolve(Date.now()-startTime)
})
Promise.all([
    record1,
    record2,
    record3
]).then((msg)=>{
    console.log(msg)
})