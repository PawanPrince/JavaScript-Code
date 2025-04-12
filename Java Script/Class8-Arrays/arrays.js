//! ARRAYS 
// ARRAY LITERALS

// let arr1 = [10,"Hello", true, ()=>{}, undefined, null];
// console.log(arr1);

// let arr2 = [19,23,5364,45,5465];

// console.log(arr2);
// console.log(arr2[2]);
// console.log(arr2.length);  //5
// console.log(arr2[arr2.length-1]);

// // ARRAY CONSTRUCTOR

// let arr3 = new Array(10,20,30,40,50)
// console.log(arr3); //[10,20,30,40,50]


//! ARRAY METHODS

//!                            POP(): last element remove.

let arr4 = [10,20,30,40]
arr4.pop()
console.log(arr4.pop()); //40
console.log(arr4); //[10,20,30]

//!                            PUSH(): adds element at the last.
arr4.push(45,65,87)
console.log(arr4.push);

console.log(arr4);

//!                            UNSHIFT():  Add elements at first and  returns new length

arr4.unshift("Hello World");
console.log(arr4);
console.log(arr4.unshift);

//!                            SHIFT(): Remove first element

arr4.shift();
console.log(arr4.shift());
console.log(arr4);


//!                           SPLICE():    START INDEEX , DELETE COUNT, NEW ELEMENT TO BE ADDED

// console.log(arr4.splice(1,2,676,543));
console.log(arr4.splice(0,1,"hii"));
console.log(arr4);


// without deleation we wnt to add then try this:
console.log(arr4.splice(2,0,"add"));
console.log(arr4);












