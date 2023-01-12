//pass by value and pass by refernce
//pass by value
// a value remain 5 but b value =10
let a = 5;
let b = a;

b = b + 5;

console.log(a)
console.log(b)

//pass by reference(object type (array,obj,func))
//both obj1 and obj2 pass value gonna change
const obj1 = {
    user: "zac",
    pass: "password"
}
const obj2 = obj1;

obj2.pass = "mac"

console.log(obj1)
console.log(obj2)
