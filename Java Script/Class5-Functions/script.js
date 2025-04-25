// debugger
// console.log("start");
// console.log(a);
// var b = 20;
// console.log(b);
// var a;
// function greet(){
//     console.log("I'm Greet Function");  
// }
// a= 200;
// console.log(greet);
// console.log(a);
// greet();
// console.log("End");

// ! -->  New
// debugger
// console.log("Start");
// console.log(x);
// var x = function(){
// var n1 = 10;
// var n2 = 20;
// var n3 = 30;
// console.log(n1,n2,n3);
// }
// console.log(x);
// var y =500;
// console.log(y);
// x()
// console.log("End");


// //! --> PARAMETRIED FUNCTION

// function sum(a,b){
// console.log(a+b); //30


// }
// sum(10,20);
// sum(40.10);

// //!--> Return Type Function

// function multiply(a,b){

// let result = a*b;
// console.log(result); //10
// return result

// }
// let val = multiply(5,2);
// console.log(val); //10


// //! Name Function

// function abc(){
//    return "hey, How's You!"    
// }
// var x = abc;  // store whole function value
// var x = abc(); // store return type only.
// console.log(x);

//! --> Nested Function


//!  EXAMPLE--1

// function parent(){
//     var money = 8745;
//     console.log(money);

//     function child(){
//         var savings = 787;
//     console.log(savings);

//     }
//     child()
// }
// parent()


// //! EXAMPLE -2

// function parent(){
//     var money = 8745;
//     console.log(money);

//     function child(){
//         var savings = 787;
//     console.log(savings);

//     }
//     return child
// }
// var fun = parent()
// console.log(fun);
// fun()



//! EXAMPLE -3
debugger
function parent(){
    var money = 8745;
    console.log(money);

    function child(){
        var savings = 787;
    console.log(savings);

    }
    return child()
}
var fun = parent()
console.log(fun);
fun()
