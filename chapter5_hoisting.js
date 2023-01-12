//hoisting
//function declaration moved to the top in hoisting

sum(5 + 3);

function sum(a, b) {
    add = a + b
    console.log(add)
}
// it will show error as varaiable should be give upto syntax only function can be declare in flexible way 
num(3 + 6)
var num = function sum(a, b) {
    add = a + b
    console.log(add)
}

// it will show error as varaiable should be give upto syntax only function can be declare in flexible way 
numb(5 + 7)
const numb = (a, b) => {
    add = a + b
    console.log(add)
}