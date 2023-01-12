//for each loop
//mostly used in array

const myplanguage = ['javascript', 'php', 'java', 'c', 'python'];
//for
for (let x = 0; x < myplanguage.length; x++) {
    console.log(myplanguage[x]);
}


//for each
myplanguage.forEach(function (x, y) {
    console.log(x, y)
})
//x is index
//y is element



const myprlanguage = [10, 20, 30, 40, 50]
myprlanguage.forEach(function (x, y, z) {
    console.log(z[0] + 100);
})