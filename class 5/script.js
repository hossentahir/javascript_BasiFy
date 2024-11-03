const arr = ['apple','banana','mango'];

document.write('before push' + "<br>");

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ' ');
}

arr.push('akash');
var a = arr.toString();

document.write( "<br>" + a );


var x = arr.shift();

document.write("<br>" + 'after shift' + "<br>");

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ' ');
}


var x = arr.unshift("sazzad");

document.write("<br>" + 'after unshift' + "<br>");
document.write(x + ' ');

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ' ');
}

var x = arr.push("hossen");

document.write("<br>" + 'after push' + "<br>");

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ' ');
}

var x = arr.pop();

document.write("<br>" + 'after pop' + "<br>");

for(let i = 0; i < arr.length; i++){
    document.write(arr[i] + ' ');
}

var a = ['hand','leg','nose','eye','mouth'];
var b = a.slice(1,3);
document.write("<br>" + b);

var a = ['hand','leg','nose','eye','mouth'];
a.splice(1,0,"spliceKorlam");
document.write("<br>" + a);

var a = ['hand','leg','nose','eye','mouth'];
a.splice(1,1,"spliceKorlam");
document.write("<br>" + a);



document.write("<br>" + "This is function practice");
function add(){
    var a = 10;
    var b = 20;
    var sum = a + b;
    document.write("<br> sum of a and b " + sum);
}

add();


document.write("<br>" + "This is function practice in another way");
const addition = () =>{
     var a = 5;
     var b = 5; 
    const sum = a + b;
    document.write("<br> sum of a and b " + sum);
}

addition();


document.write("<br>" + "This is function practice with parameter");
const addWithParameter = (a,b) =>{ // parameter
      
    const sum = a + b;
    document.write("<br> sum of a and b of the parameter " + sum);
}

addWithParameter(10, 20); // argument


document.write("<br>" + "This is function practice with retun type ");
const returnSum = (a,b) =>{ // parameter
      
    const sum = a + b;
    return sum;
    //document.write("<br> sum of a and b of the parameter " + sum);
}

document.write("<br> sum of a and b of the parameter ");
document.write(returnSum(10, 20));



//shift() = mane first ta bad deoa
//unshift() = shift er ulta, array er first e element add kore
//pop() = last er ta bad deoa
//push() = array er last e element add kore
