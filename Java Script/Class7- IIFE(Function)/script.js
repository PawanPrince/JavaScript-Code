//!  IIFT ( IMMEDIATELY INVOKED FUNCTION EXPRESSION)
// executes only ones


// (function(){

//     console.log("I am IIFE");

// }) ();

// (function(){

//     console.log("I am IIFE");

// })();


// ! ARROW FUNCCTION -> ES6

// 

const a = () => {
    console.log("I am Arrow");
};
console.log(a());  

//----------------------------------------------------------------
// ignore () but replace with _ if no parameter is present 
const b = _=>{
    console.log("im arrow function 2");
}
b();

//------------------------------------------------------------------
// ignore () if having only one parameter
const c = n1 =>{
    console.log(n1);

    
}
c(77);

//-------------------------------------------------------------------------

// use () if having multiple parameters 
const d = (n1,n2)=>{
    console.log(n1,n2);
    
}
d(10,45);


//! inside arrow fun two type of retun avalible

//EXPLICIT RETURN

const e =() => {
    return "Explicit";

};
console.log(e());   

// IMPLICIT RETURN

const f = () => "Implicit";
console.log(f());
