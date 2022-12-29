// node has no window - there is no browser 
// globals 

//__dirname   - path to current directory 
// __filename - file name 
// require    - function to use modules 
// module     - info about current module
// process    - info about env where the program is being executed 

console.log(__filename)

setInterval(function () {

    console.log("hello world")
}, 2000)