//object destructoring

const biodata = {
    name: "vishal",
    age: 20,
    deg: 'b.com',
    hobby: {
        first: "playing basketball",
        second: "killing people"
    }
}
//object destruct shold be written in format
//cant write a,b,c
let { name, age, deg, hobby } = biodata
console.log(`my name is ${biodata.name}`)
console.log(`my name is ${name}and my hobby is ${hobby.second}`)



