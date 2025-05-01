// ! OBJECTS :collection of properties in the form of key and value pairs
// // // // --> Ways of creating object
// // // // OBJECT LITERALS
// // // const user = {
// // //   id: 1,
// // //   firstname: "John",
// // //   lastname: "Doe",
// // // };
// // // console.log(user);

// // // // OBJECT CONSTRUCTOR
// // // const user2 = new Object({ id: 2, firstname: "clark", lastname: "kent" });
// // // console.log(user2);

// // // // CREATE
// // // const person1 = {
// // //   id: 3,
// // //   firstname: "Bruce",
// // //   lastname: "Wayne",
// // //   company: "Wayne Enterprises",
// // //   salary: 5000,
// // //   hobbies: ["coding", "cricket"],
// // //   45: "Rohit",
// // //   80: ["hello", "world"],
// // // };
// // // //READ
// // // // 1 way using dot operator
// // // console.log(person1.firstname); //Bruce
// // // console.log(person1.hobbies[0]); // coding
// // // // console.log(person1.45);//! not possible

// // // // 2 way using square brackets ["key"]
// // // console.log(person1["company"]); //Wayne Enterprises
// // // console.log(person1["salary"]); //5000
// // // console.log(person1["45"]); //Rohit
// // // console.log(person1[80][1]); //world

// // // // UPDATE
// // // person1.salary = 80000;
// // // console.log(person1.salary); // 80000

// // // // ADD NEW KEY
// // // person1.email = "bruce.wayne@gmail.com";
// // // console.log(person1);

// // // // DELETE
// // // delete person1.lastname;
// // // console.log(person1);

// // // // ! only 1 way to  iterate an object (by using forin loop)
// // // for (let i in person1) {
// // //   console.log(person1[i]);
// // // }

 // ! object methods
// // let obj = {
// //   id: 1,
// //   ename: "John Wick",
// // };
// // //! Object.keys(): return keys in the form of array
// // console.log(Object.keys(obj)); // ['id', 'ename']

// // //! Object.values(): return values in the form of array
// // console.log(Object.values(obj)); // [ 1 , "John Wick"]

// // //! Object.entries() : return key and value pair in the form of nested array
// // let keyAndValArr = Object.entries(obj);
// // console.log(keyAndValArr);//[["id",1],["ename","John Wick"]]

// // //! Object.fromEntries() : converts nested array into object and returns it
// // console.log(Object.fromEntries(keyAndValArr));//{id: 1, ename: 'John Wick'}

// ! ARRAY DESTRUCTURING
// // let arr = [10, 20, 30, 40, 50];
// // let [a1, a2, a3, a4, a5] = arr; // destructure all elements
// // console.log(a3);

// // let arr2 = [100, 200, "Hello", 300, 400];
// // let [b1, , b2, , b3] = arr2; // skipping elements
// // console.log(b1, b2, b3);

// // let arr3 = [1000, 2000, [10, 400, ["Hello js"]]];
// // // console.log(arr3[2][2][0]);
// // let [c1, , [, c2, [c3]]] = arr3;// nested array destructure
// // console.log(c3);

// // ! OBJECT DESTRUCTURING
// // let person = {
// //   id: 1,
// //   fname: "John",
// //   lname: "Doe",
// // };

// // let { fname: firstname, lname: lastname, salary = 0 } = person;
// // console.log(firstname, lastname, salary);

// //! changing key name and providing default value
// // let { salary: sal = 0 } = person;
// // console.log(sal);

// // let student = {
// //   id: 2,
// //   fullname: {
// //     fname: "John",
// //     lname: "Doe",
// //   },
// //   address: {
// //     address: "Qspiders",
// //     city: "Noida",
// //     state: "UP",
// //   },
// //   skills: {
// //     frontend: ["Html", "Css", "Javascript", "React"],
// //     backend: ["Node", "Express", "Mongo", "Java", "Sql", "Python"],
// //   },
// // };

// // let {
// //   fullname: { fname },
// // } = student;

// // nested object destructuring
// // let {
// //   fullname: { fname, lname },
// //   address: { address: institute, city },
// //   skills: {
// //     frontend: [, , sub1],
// //     backend: [sub2, , , sub3, , sub4],
// //   },
// // } = student;

// // let statement = `${fname} ${lname} is studying ${sub1},${sub2},${sub3} and ${sub4} at ${institute} ${city} `;

// // console.log(statement);

