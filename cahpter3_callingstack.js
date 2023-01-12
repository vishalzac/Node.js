var globalec = "added"
function a() {
    var fa = "this is a ";
    console.log(fa);
    debugger;
    b();
    console.log("this is 1")

}
function b() {
    debugger;
    c();
    console.log("this is 2")

}
function c() {
    debugger;
    c();
    console.log("this is 3")
}
debugger;
a();