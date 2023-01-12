//string in template string

let names = " vishal"
let sname = "singh"

console.log(`${names}`)
console.log(`${names}`.startsWith('v'))  //true
console.log(`${names}`.endsWith('v'))      //true
console.log(`${names}`.includes('vishal'))  //true
console.log(`${names} ${sname}`.repeat(10))
