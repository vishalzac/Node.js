//we have global scope
//every function create it's own scoping
//lexical scoping is function within function have access to its parent function
var a = "hello guys"

function first() {
    var b = "how are you?"
    second();

    function second() {
        var c = "myself zac"
        console.log(a + b + c)
    }
}
first();