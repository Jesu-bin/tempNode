const { log } = require('console')
const eventEmiter =require('events')

const Emitter= new eventEmiter

Emitter.on('log',(arg,arg1)=>{
    log('Data received'+arg+arg1)
})

Emitter.on('log',(arg1)=>{
    log('Data Received1'+arg1)
})

Emitter.emit('log',3,2)