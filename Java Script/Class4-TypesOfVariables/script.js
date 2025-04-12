// // ! TYPES OF VARIABLES

// ! GLOBAL
// var a=10;
// let b=20;
// const c=30;

// console.log(a,b,c);//10,20,30

// if(10>3){
//     console.log(a,b,c);
    
// }

// for(let i=0;i<5;i++){
//     console.log(a,b,c);
// }

// function greet(){
//     console.log(a,b,c);
// }
// greet();

// debugger
// var a=10;
// let b=20;
// const c=30;
// console.log(a,b,c);

// debugger
// if(300<500){
//      var a=10;// global
//      let b=20;// block
//      const c=30;// block
//      console.log(a,b,c);
// }
// console.log(b);


// function abc(){
//      var a=10;// local
//      let b=20;// local
//      const c=30;// local
//      console.log(a,b,c);
// }
// abc()

// // ! GEC - Global Execution Context
// debugger
// console.log("Start");
// console.log(a);
// console.log(b);
// var b = 10;
// const c = 500;
// var a;
// console.log(c);
// let d = 60;
// console.log(a,c,d);
// d = 560;
// console.log(a,d,b);
// b = 40;
// console.log(b);
// console.log("End");

// debugger
// console.log(a);//ud
// console.log(c);//ud
// var a;
// let d = 600;
// console.log(a,d);// ud 600
// var c;
// const r = 50;
// console.log(a,c,d);// ud ud 600
// var t = 90;
// console.log(b);// ! error not defined

// console.log("CSK");
// console.log("DHONI");
// console.log("JADDU");
// console.log("RACHIN");


// console.log("RCB");
// console.log("KOHLI");
// console.log("SALT");
// console.log("DK");

// console.log("CSK");
// console.log("DHONI");
// console.log("JADDU");
// console.log("RACHIN");

// console.log("CSK");
// console.log("DHONI");
// console.log("JADDU");
// console.log("RACHIN");


// // FUNCTIONS

// // NAMED FUNCTION

// CSKTeam(); // Function Hoisting
// function CSKTeam(){
//     console.log("CSK");
//     console.log("DHONI");
//     console.log("JADDU");
//     console.log("RACHIN");
// }

// CSKTeam();

// ! ANONYMOUS FUNCTION : without name
// function (){}

// ! FUNCTION EXPRESSION
// var fun = function (){
//     console.log("Hello I Am Anonymous Func");
// }
// fun();
// console.log(fun);
// fun();


// console.log(a);// undefined
// a(); // not a function
// var a = function(){
//     console.log("Hii Everyone");
// };
// console.log(a);//pura function
// a();// Hii Everyone


