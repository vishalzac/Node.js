console.log(this)
//this refer to global scope

function sum() {
    var add = 2 + 2
    console.log("sum of two no is " + add)
    //this refer to global here not the function
    console.log(this)
}
sum()

//inside object this refer to that particular object
const mac = {
    name: "vishal",
    sum: function () {
        var addition = 2 + 2;
        console.log("sum of two numbwr is " + add)
        console.log(this)
        //over here this represent this object not global window
    }

}
mac.sum();