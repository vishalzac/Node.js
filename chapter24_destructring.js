//destructring
const myprogram = ['js', 'html', 'css', 'c++']

//traditional way
// var a = myprogram[0]
// var b = myprogram[1]
// var c = myprogram[2]
// console.log(a);

let [a, b, c] = myprogram
console.log(a)

let [w, , , e] = myprogram
console.log(w, e)
console.log(`my fav language is ${w} and my least fav is ${e}`)