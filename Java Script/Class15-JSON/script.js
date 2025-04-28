// ! JSON (JAVASCRIPT OBJECT NOTATION)
// {
//   "id":1,
//   "name":"john",
//   "email":"john@gmail.com"
// }

// let obj = {
//   id: 1,
//   ename: "clark",
// };
// console.log(obj);
// // console.log(typeof obj);

// //! JSON.stringify() ->converts js object to json data and returns it
// let jsonData = JSON.stringify(obj);
// console.log(jsonData);
// console.log(typeof jsonData);

// //! JSON.parse() ->converts json data to js object and returns it
// let jsObj = JSON.parse(jsonData)
// console.log(jsObj);

// let p1 = fetch("https://fakestoreapi.in/api/products");
// console.log(p1);

// p1.then((response) => {
//   let p2 = response.json();

//   p2.then((data) => {
//     console.log(data);
//   });

//   p2.catch((err) => console.log(err));
// });

// p1.catch((err) => console.log(err));


async function getProducts() {
    try {
      let response = await fetch("https://fakestoreapi.in/api/products");
      let data = await response.json();
      console.log(data);
      displayProducts(data);
    } catch (error) {
      document.writeln(`<h2>Something went wrong please refresh</h2>`);
      console.log(error);
    }
  }
  getProducts();
  
  function displayProducts(data) {
    console.log(data);//{status:"",message:"",products:[{},{},..]}
  
    data.products.map((ele) => {
      let { title, image } = ele;
      document.writeln(`
        <div style="padding:30px; margin:30px; border:1px solid black">
        <h2>${title}</h2>
        <img src="${image}" height="100px" >
        <button>Add to Cart</button>
        </div>
        `);
    });
  }
  