//exercise3
const interviewq = (name) => {
    return function (topic) {
        if (name === "vishal") {
            console.log(`hi , ${name}. plz explain what is ${topic}`)
        } else if (name === "zac") {
            console.log(`hi , ${name}. plz explain what is ${topic}`)
        } else if (name === "mac") {
            console.log(`hi , ${name}. plz explain what is ${topic}`)
        } else {
            console.log(`welcome to the company`)
        }
    }
}

const candidate = interviewq("vishal")
candidate(`ui`);
//or
// interviewq("vishal")("ui")