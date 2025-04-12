// function abc(){
//     console.log(" i am abc");
//     // return 10,20  // last value will print. 20
//     return [10,20];
    
// }
// var result = abc();
// console.log(result);

// //  debugger
// function Greet(){
//     console.log("I'm Greet");
//     function xyz(){
//         console.log("I'm XYZ");
        
//     }
//     return xyz;
    
// }

// Greet() () // js currying  //! if parent fun calling/ returning cchild fun without storing then we can use double patranthesis




// // !      ---->  CLOUSERS: when ever we are trying to access parent function's property inside child function closer memory is created.

// // debugger
// function Parent(){
//     var a = 10;
//     console.log(a);

// function Child(){
//     var b = 20;
//     // console.log(b);
//     console.log(b,a);
    
// }
//    Child(); 
// }
// Parent();

// --------------------------------------------------------------------------------
//  // debugger
// function Parent(){
//     var a = 10;
//     console.log(a);

// function Child(){
//     var b = 20;
//     // console.log(b);
//     console.log(b,a);
    
// }
//    return Child; 
// }
// let val = Parent();
// val()


//! ------>    Lexical Scoping: The ability of js engine to search a variable outside of its current scop is called LS. (it's work like inheritance basically)





//! REST PEREMETRIED FUNCTION :
// // debugger
// // function abc (n1, n2, n3, n4){
//     function abc (n1, n2, n3, n4, ...x){ //10 20 30 40
//     console.log(n1,n2,n3,n4);
//     console.log(arguments); // alternatine of rest parameter
//     console.log(x);    // [50,60,70,80,90]
    
// }
// abc(10,20,30,40,50,60,70,80,90);



//!     HIGHER ORDER FUNCTION AND CALLBACK FUNCTION:

        //!-------> A function which accepts another function as argument is known as HOF.

        //!-------> CALLBACK FUN: A function which passes as an arguments. 


let sum = function(a,b){
    console.log(a+b);  //30
};
function calculate(n1,n2,fun){
    fun(n1,n2)

}
// calculate(10,20,function(){});
calculate(10,20,sum);