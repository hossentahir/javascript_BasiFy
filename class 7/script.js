let x = 6;
document.write("The height is : " + x+x);
document.write("<br>");

var person = {
    age : 20,
    height : 5.8,
    firstName : "Ahsan",
    lastName : "Hasan",
    salary : 50000,
    comm : 10000,
    nameOutput : function() {
        return  this.firstName +  this.lastName;
    },
    nameOutput2 : () => {
        return person.firstName + person.lastName;
    },
    salCom : function(){
        return this.salary + this.comm;
    }
}
//person["weight"] = 50; 

person.weight = 60;

document.write(person["weight"] + "<br>");
document.write(person["age"] + "<br>");

document.write(person.nameOutput() + "<br>");
document.write(person.salCom() + "<br>");
document.write(person.nameOutput2());


const cat = {
    color : "white",
}

document.write(cat.color);

cat.age = 2;
document.write(cat.age + "<br>");

cat["sound"] = 'meao';
document.write(cat.sound + "<br>");

