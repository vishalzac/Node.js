//this exercise

const mac = {
    name: "vishal",
    sum: function () {
        var addition = 2 + 2;
        console.log("sum of two numbwr is " + add)
        console.log(this)

        function child() {
            var name = "zac"
            console.log("child name is " + name)
            console.log(this) //refer to window (global object)
        }
        child()
    }

}
mac.sum();