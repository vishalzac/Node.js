//in javascript we can assign a function to a variable
// pass a function as a argument
const num = function () {
    console.log("this is zac")
}
num()

const youtube = {
    name: "my channel is zac",
    qualify: function () {
        console.log("this is func")
    }
}
youtube.qualify()

const myname = () => {
    return "hello"
}
const myname2 = (sayhi, name) => {
    console.log(sayhi() + name);
}

myname2(myname, "vishalzac");
//function under function is callback


//returning function

function a() {
    return function b() {
        console.log("thank everyone");
    }
}
// a()()
//or

const b = a()
b()