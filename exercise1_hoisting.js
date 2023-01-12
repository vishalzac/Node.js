// only functiona and var work in hoisting 
var a = 10;
console.log(a)
var a = 20;

console.log("I am a " + job) //undefined
var job = "web developer"
console.log("I am a " + job)

function whoami() {
    console.log("I am a" + job)  //undefined
    var job = "full stack"
    console.log("i am a " + job)

}
whoami()