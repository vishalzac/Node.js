//spread operator
//replace apply method

function sum(a, b, c) {
    console.log(a + b + c);
}

var arrval = [5, 2, 3];

//null =this
sum.apply(null, arrval);


//es6

function sum1(a, b, c) {
    console.log(a + b + c);
}

var arrval = [5, 2, 3];
sum1(...arrval)
//...will take all the parameter

//replace concat

let arr1 = [1, 2, 3]
let arr2 = [4, 5, 6]
// arr1 = arr1.concat(arr2)
//or
// her , = +
arr1 = [...arr1, ...arr2]
console.log(arr1)

//push

let q = [1, 2, 3]
let qw = ["as", "like", "that"]
let w = [...q, ...qw, 4, 5];
console.log(w)

