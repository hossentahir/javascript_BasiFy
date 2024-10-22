// let x = 5; // number = int 
// let y = 5.6; // number = float/double
// let o;
// alert(o);
// console.log(10+o);
console.log("hello world\n\n\n\n\n\n");

// let count = 3;
// count += 5;
// console.log(count);

// const x = Symbol("Basify"); // symbol ekta tag. Object nia kaj korar somoy eita lage ba valo vabe bojha jai object er bepar ta.
// console.log(x);
// console.log(x.description);

// // vaiya ei line ta dhorte pari nai: const x = Symbol("Basify");

// let b = 20;

// if(b == 20){
//     console.log("hello");
// }
// else{
//     console.log("gelo");
// }

// let s = 20;

// if (s == 10){
//     console.log(s+10);
// }
// //ambiguity problem
// else if (s == 20){
//     console.log('s is '+s*5);
// }
// else if (s == 20){
//     console.log('s is 20');
// }

// else{
//     console.log("Else part");
// }


//learning comparison operator
// let num = 10;

// if(num < 100){
//     let x = 5;
//     let y = 2;
//     let result = x + y;
//     console.log(result);
//     console.log("the condition is num <= 100");
// }
// else if(num != 100){
//     console.log("100 bade onno kichu ase but seita 100 er boro");
// }
// else{
//     console.log("This is else");
// }


// // logical operator = and (&&), or (||), not (!)
// let x = 10;
// let y = 1;
// //Example of and (&&)
// if(x == 10 && y == 5){
//     console.log("Nice");
// }
// else{
//     console.log("Bad");
// }

// let x = 0;
// let y = 15;
// //Example of or (||)
// if(x == 10 || y == 1 ){
//     console.log("Bah");
// }
// else{
//     console.log("Sih!");
// }

// //Example of not(!)
// let x = 1;
// if(!(x == 1)){
//     console.log("This is not 1");
// }
// else{
//     console.log("This can be 1");
// }

//ternary operator and its recommended over if else
// let x = 10;
// x == 10 ? console.log("x is 10") :  console.log("x is not 10");
// x == 10 ? console.log("x is 10"); console.log("sg") : (x == 5 ? console.log("This is 5") : (x == 15) ? console.log("This is 15") : console.log("without 10 or 5"));

let x = 10;

// First line: Correct use of ternary operator to return a value
const message = x == 10 ? "x is 10" : "x is not 10";
console.log(message);

// Second line: Using nested ternary operators to return a value
const result = x == 10 ? "x is 10" : (x == 5 ? "This is 5" : (x == 15 ? "This is 15" : "without 10 or 5"));
console.log(result);

