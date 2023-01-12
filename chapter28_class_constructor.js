//class , object , constructor , oops
//object is a instance of a class

class students {
    constructor(name, age, classs) {
        this.myname = name;
        this.myage = age;
        this.myclass = classs;
    }
    biodata() {
        console.log(`Hi i am zac my name is ${this.myname} my age is ${this.myage} and i am in class${this.myclass}`)
    }
}
let obji = new students("vishal", 18, 12);
obji.biodata();

//inheritance
class players extends students {
    constructor(name, age, classs, game) {
        super();
        this.mygame = game;
    }


}
let obj1 = new players("zac", 18, 12);
obj1.biodata();

