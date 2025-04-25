console.log();
// hetroginius
// null ---> primitive
//!               slice(start index, end index) 

//!                end index always ignored 

// let arr1 = [10,20,30,40,50,60];

// let slicedArr = arr1.slice(9);

// console.log(arr1);
// console.log(slicedArr);

//!                IndexOf()

let arr2 = [10,20,30,40];
console.log(arr2.indexOf(20));
console.log(arr2.indexOf(200));

//  //! includes()
//  console.log(arr2.includes(20)); //true
//  console.log(arr2.includes(400)); //false

// // // // // // //! toString()
// // // // // // console.log(arr2.toString()); // 10,20,30,40

// // // // // // //! join()
// // // // // // console.log(arr2.join(" x ")); // 10 x 20 x 30 x 40

// // // // // // //! reverse() : mutates the original array
// // // // // // console.log(arr2.reverse()); //[40, 30, 20, 10]

// // // // // // // ! sort()
// // // // // // // let arr3 = [1, 4, 6, 2, 3, 7];
// // // // // // // console.log(arr3.sort());

// // // // // // let arr4 = [37, 10, 3, 2, 50, 42];
// // // // // // // //[2,3,10,37,42,50] <- expected output

// // // // // // // console.log(arr4.sort());
// // // // // // // //[10, 2, 3, 37, 42, 50] <- lexographical sorting

// // // // // // // console.log(arr4.sort((a,b)=> a-b));
// // // // // // // //[2, 3, 10, 37, 42, 50]

// // // // // // // console.log(arr4.sort((a,b)=> b-a));
// // // // // // // //[50, 42, 37, 10, 3, 2]

// // // // // // // -->[37, 10, 3, 2, 50, 42]
// // // // // // //! SORT () ==> LOGIC

// // // // // // ! concat()
// // // // // // let a = [10, 20, 30];
// // // // // // let b = [40, 50, 60];

// // // // // // console.log(b.concat(a));//[40, 50, 60, 10, 20, 30]

// // // // // // console.log(b.concat([80,79,56],a));
// // // // // // // [40, 50, 60, 80, 79, 56, 10, 20, 30]

// // // // // // console.log(b.concat(b));//[40, 50, 60, 40, 50, 60]

// // // // // // let arr = [10, 20, 30, 40];

// // // // // // for (let i = 0; i < arr.length; i++) {
// // // // // //   console.log(arr[i]);
// // // // // // }

// // // // // // // for in
// // // // // // for(let i in arr){
// // // // // //   console.log(i);
// // // // // // }

// // // // // // // for of
// // // // // // for(let i of arr){
// // // // // //   console.log(i);
// // // // // // }

// // // // // // let arr = [12, 5, 65, 80, 2];
// // // // // // // ==> [5, 12, 65, 80, 2];
// // // // // // // ==> [5, 12, 65, 2, 80];
// // // // // // // ==> [5, 12, 2, 65, 80];
// // // // // // // ==> [5, 2, 12, 65, 80];
// // // // // // // ==> [2, 5, 12, 65, 80];

// // // // // // arr.sort((a, b) => a - b); //[2, 5, 12, 65, 80];

// // // // // // //a - b = negative   a before b (no swap)
// // // // // // //a - b = positive   a after b  (swap)
// // // // // // //a - b = 0   no swap