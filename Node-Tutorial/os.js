const os = require('os')

// info about current user 

const user = os.userInfo()

console.log(user)

console.log(`The System Uptime is ${os.uptime()} seconds`)


const currentOs = {
    name: os.type(),
    realease: os.release(),
    toralMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)