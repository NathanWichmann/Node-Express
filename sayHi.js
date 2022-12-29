const {john, peter} = require('./names')
const sayHi = require('./util')

console.log(sayHi)

sayHi('Susan')
sayHi(john)
sayHi(peter)