//higher order function

const interviewq = (name) => {
    if (name == "vishal") {
        return function (topic) {
            console.log(`Hi ${name}.what is ${topic}`)
        }
    } if (name == "zac") {
        return function (topic) {
            console.log(`Hi ${name}.what is ${topic}`)
        }
    } if (name == "mac") {
        return function (topic) {
            console.log(`Hi ${name}.what is ${topic}`)
        }
    } else {
        return function () {
            console.log("welcome to interview")
        }
    }
}
interviewq("vishal")("ui")
interviewq("zac")("uc")
interviewq("mac")("ux")