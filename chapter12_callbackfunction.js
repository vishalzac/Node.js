//callback function

const func1 = () => {
    setTimeout(function () {
        console.log("this is func1")
    }, 3000)
}
const func2 = () => {
    console.log("this is func2")
}

func1()
func2()



//callback 
const funca = (name, callfrnd) => {
    console.log(`calling  ${name}`)
    callfrnd();
}
const funcb = () => {
    console.log(`call received`)
}
//first funca will execute than func b
funca("zac", funcb)
