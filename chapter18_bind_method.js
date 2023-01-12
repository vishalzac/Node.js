//bind method
//bind method takes an object as an first argument and create a new function
//bind mean to bind function with object
const youtube1 = {
    name: "vishal",
    content: "lifestyle",
    feature: function () {
        console.log(`very friendly way of teaching. ${this.name}is 
        my fav ${this.content} cahnnel. i will love to give 5 star channel.`)
    }
}
youtube1.feature();

let a = youtube1.feature;
a() //this way will show undevined value


//currently we will take youtube1 as we are not binding this with some other independent object or function
let b = youtube1.feature.bind(youtube1);
b()


//bind 
const youtuber1 = {
    name: "vishal",
    content: "lifestyle",
}

function features(rating) {
    console.log(`very friendly way of teaching. ${this.name}is 
    my fav ${this.content} cahnnel. i will love to give ${rating} star channel.`)
}

let you1 = features.bind(youtuber1)
you1(10)


