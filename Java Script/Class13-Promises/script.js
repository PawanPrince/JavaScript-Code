// ! PROMISES

// let dbData = [
//   {
//     id: 1,
//     ename: "John",
//   },
//   {
//     id: 2,
//     ename: "Bruce",
//   },
//   {
//     id: 3,
//     ename: "Clark",
//   },
// ];

// let err = { message: "something went wrong" };

// let p1 = new Promise((resolve, reject) => {
//   if (10 > 2) {
//     resolve(dbData);
//   } else {
//     reject(err);
//   }
// });
// console.log(p1);

// p1.then((data) => {
//   console.log(data);

//   data.map((ele)=>{
//     document.writeln(`<h2>${ele.ename}</h2>`)
//   })

// });
// p1.catch((err)=>{
//     console.log(err);
//     document.writeln(err.message)
// })

// let p1 = fetch("https://dummyjson.com/users");
// console.log(p1);

// p1.then((response) => {
//   console.log(response.json());
// });

// p1.catch((err) => {
//   console.log(err);
// });