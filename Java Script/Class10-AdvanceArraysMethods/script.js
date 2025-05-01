//! ADVANCE ARRAY METHODS
// // // // //--> all are Higher Order Functions

// // // // // forEach() :used to iterate an array, returns undefined
// // // // // let arr1 = [45, 80, 30, 10, 2];

// // // // // let val1 = arr1.forEach((ele,idx,arr)=>{
// // // // //   console.log(ele);
// // // // //   return ele+5
// // // // // })
// // // // // console.log(val1);

// // // // // map() :used to iterate an array, returns new array
// // // // // let val2 = arr1.map((ele, idx, arr) => {
// // // // //   return ele * 2;
// // // // // });
// // // // // console.log(val2);

// // // // // // filter(): returns element which satisfies the condition
// // // // // // it returns a new array
// // // // // let arr2 = [70, 55, 48, 33, 8];
// // // // // let filteredArr = arr2.filter((ele, idx, arr) => {
// // // // //   return ele>50
// // // // // });
// // // // // console.log(filteredArr);//[70,55]

// // // // // find(): returns first element which satisfies the condition
// // // // // let arr3 = [47, 60, 78, 60, 31, 78];

// // // // // let x = arr3.find((ele) => {
// // // // //   console.log(ele);
// // // // //   return ele == 78;
// // // // // });
// // // // // console.log(x);

// // // // // // findIndex(): returns first element's index value which satisfies the condition
// // // // // let y =arr3.findIndex((ele)=>{
// // // // //   return ele==78
// // // // // })
// // // // // console.log(y);

// // // // //! reduce(callback_func , accumulator_val)
// // // // // let arr = [10, 20, 30, 40, 50];

// // // // // let sum = arr.reduce((acc, ele) => {
// // // // //   console.log(acc,ele);
// // // // //   return acc + ele;
// // // // // }, 0);
// // // // // console.log(sum);
