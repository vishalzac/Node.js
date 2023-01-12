//call method is use to call other object method by other object
const youtube1 = {
    name: "vishal",
    content: "lifestyle",
    feature: function (rating, subs) {
        console.log(`very friendly way of teaching. ${this.name}is 
        my fav ${this.content} cahnnel. i will love to give ${rating} star . and dont forget to ${subs} channel.`)
    }
}
youtube1.feature(5, "subscibe")

const youtube2 = {
    name: "zac",
    content: "gym"
}
//put feature of youtube 1 in youtube2 
// youtube1.feature.call(youtube2);
youtube1.feature.call(youtube2, 5, "subscribe");

//not permanent