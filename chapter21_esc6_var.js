//es6

let a = "zac"
a = mac;

var b = "zac"
b = mac;


//this will show error
const c = "zac"
c = mac;

//var has functional scope
//let and constant has block scope

function nodjs(nam) {
    if (nam) {
        let name = "vishal";
        const sname = "singh"
        console.log("my ame is " + name + sname)
    }

}
nodjs(true)

//var also show console outside function 
function nodjs(nam) {
    if (nam) {
        var name = "vishal";
        var sname = "singh"
    }
    console.log("my ame is " + name + sname)
}
nodjs(true)