// let x = [1,3,5];

// document.write(x + "/n");

// document.write(x[0]);
// document.write(x[3]);

// let y = [1,2,3,4,5,6,7];

// for(let i = 0; i < y.length; i++){
//     document.write("index "+ i);
//     document.write("value => "+ y[i]);
     
//     // document.write(<br>);
// }


// let mix = [1,"hello",2, "world", "yeaaa23",true];
// for(let i = 0; i < mix.length; i++){
//     document.write("index " + i  + " = " + mix[i] + '<br>');
// }



let two = [[1,2,3,4,5],['a',"hey",'b','sadf', 'hello']];

for(let i = 0; i < 5; i++){
    for(let j = 0; j < 5; j++){
        document.write(two[i][0] + "      ");
    }
    document.write('<br>');
}


/*

//normal array

let number = [1,2,3,4,5];

for(let i = 0; i < number.length; i++){
    document.write(number[i] + "<br> ");
}

//eita ekta for of loop . eita i javascript e beshi use hoi
for (let value of number){
    document.write(value + '<br>');
}

for (let i of number){
    document.write(i + '<br>');
    document.write(number + '<br>');
}

*/

// Object gula print er jonno javascript e for in loop use hoi
//ei for in loop ta sob cheye beshi use kora hoi. 
// let obj = {
//     x : 1,
//     y : 2,
//     z : 3,
//     name : "Basify",
//     upcoming : "New web app"
// }

// for(let key in obj){
//     document.write(key + " " + obj[key]+ "<br>" );
//     // document.write(obj);

// }
// document.write(obj.x + " " + obj.y + " " + obj.z);


//let dia likhle same name duita variable create kora jai na kintu var dia jai

/*
var car = {
    name: "BMW",
    color: "black",
    tire: 4,
}

var car = {
    name: "Toyota",
    color: "Silver",
    tire: 4,
}
for(let key in car){
    document.write(key + " : " + car[key] + '<br>');
}
*/


