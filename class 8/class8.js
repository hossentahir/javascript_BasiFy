

console.log("hello");

console.log(`hello`);

let human = {
    hand : 2,
    leg : 2,
    eye : 2,
    name : 'fahim'
}

//object k loop dia easy vabe print korar technique
for(let key in human){
    console.log(`The key is ${key} and the value is ${human[key]}`);
}

//object er moddhe object kivabe rakhbo

let person = {
    name : 'Abul',
    hair : {
        color : 'Black',
        height : 1.5
    }
}

console.log(person.hair.color);
console.log(person.hair.height);


//object.keys = ekta array akare key gula k return kore
console.log(Object.keys(person));

//object.values = o values gula k array er moddhe output dibe
console.log(Object.values(person));

//object akare show kore
console.log(person);

//object theke string e jaoa and string theke object e jete hole json use korte hoi
const s = JSON.stringify(person);
console.log(s);

//string k abar kivabe object e convert kore?
//eivabe convert kore amader kaj kora lage
//conversion onek kaje lage
//aste aste sob bujhe jabo vaiya bolse
let str = '{"name" : "Nasir", "age" : 25, "height" : 5.8}';
console.log(str);
const o = JSON.parse(str);
console.log(o);
console.log(Object.values(o));
console.log(Object.keys(o));


//javascript e class kivabe likhte hoi
//class er name ta te C boro hater hoi
//class er vitor var, const, let use kora jai na. sorasori variable er name likhte hoi.
//class thakle er ekta constructor thakbe i noile class ta use kora jai na.
//constructor er moddhe oi class er variable er name gula use kora better practice
//instance create na korle class use kora jai na.
class Student{
    //eikhane oi id name na likhle o hoi.
    // id;
    // name;

    constructor(id, name){
        this.id = id;
        this.name = name;

    }
}

const s1 = new Student(1, "Jamal");
console.log(s1);
console.log(s1.id);
console.log(Object.keys(s1));
console.log(Object.values(s1));


//class er moddhe function keyword ta use kora jai na.
//class er moddhe without function keyword use kore function likhte hoie
//class er moddher function k method bola hoi.
class Student2{
    //eikhane oi id name na likhle o hoi.
    // id;
    // name;

    constructor(id, name,cgpa){
        this.id = id;
        this.name = name;
        this.cgpa = cgpa;

    }
    show(){
        console.log(`Id = ${this.id}`);
        console.log(`Name = ${this.name}`);
        console.log(`CGPA = ${this.cgpa}`);

    }
}

const s2 = new Student2(1, "Jamal", 4.00);
s2.show();

// console.log(s);
// console.log(s2.id);
// console.log(Object.keys(s2));
// console.log(Object.values(s2));

 