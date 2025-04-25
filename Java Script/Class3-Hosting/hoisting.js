//! Hoisting: moving the decelaration part at the top of the original code internally. Js engine will hoist the var variable and assign undefined value to it. but in the case of Let and Const Js engine will not be able to assing undefined value to it because of TDZ (Temporal Dead Zone) 

//! TDZ: the time period between accessing of the variable before decelaration. Its available only in Let and Const variables

// var a --> UD internally
// let b --> TDZ (Temprol Dead Zone)

// console.log(a); //ud
// console.log(b); // reference err (TDZ).



// var a = 10;
// console.log(a); //10

// let b = 29;
// console.log(b); // 20


//! Types Of Variables:

//! Global: 

// var a = 10;
// let b = 20;
// const c = 30;

// console.log(a,b,c);

// if (10 > 3){
//     console.log(a,b,c);
// }

// for(let i =0; i < 5; i++){
//     console.log(a,b,c);
// }
// function greet(){
//     console.log(a,b,c);

// }
// greet();

//! Scopes:

// debugger
// var a = 100;
// let b = 200;
// const c = 300;
// console.log(a,b,c);

// if(300<500){

// var a = 100; // global
// let b = 200; // block
// const c = 300; // block
//  console.log(a,b,c);

// }

debugger
function abc() {
var a = 100; //local
let b = 200; //local
const c = 300; //local
abc()
}