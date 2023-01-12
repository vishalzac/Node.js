//rest parameter
function sum(a, b) {
    console.log(a + b);
}
//it willl only take first two number
sum(1, 2, 3, 4, 5, 6)
//es6

function sum1(...a) {
    console.log(...a)
    let total = 0;
    for (let i of a) {
        total += i;
    }
    console.log(total)
}
sum1(1, 2, 3, 4, 5, 6, 7, 8)


function fun(a, b, ...c) {
    console.log(c)
    console.log(c[0])
    console.log(c.length)
    console.log(c.indexOf('edan'))
}
fun('r', 'e', 'q', 'w', 'd', 'g', 'j')