//exercise2
let like = 100;

const youtube = {
    name: "vishaltechnical",
    subs: 10000
}

const zac = (a, b) => {
    a = 200;
    b.subs = 1000
}

zac(like, youtube);

console.log(like) //no change as premetive datatype 
console.log(youtube.subs); //change in both as a reference data type