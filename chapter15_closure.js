//closure mean tge inner function has the access of outer function
//it is acombination aof function and the lyxical environments
//also outer function parameter
//return function will not execute only it can ececute by ()

const outerfunc = (a) => {
    let b = 10;
    const innerfunc = () => {
        let sum = a + b;
        console.log(`the sum of two number is ${sum}`)
    }
    // innerfunc()
    return innerfunc
}

// outerfunc(15) or
let inner = outerfunc(15)
console.dir(inner)
inner()