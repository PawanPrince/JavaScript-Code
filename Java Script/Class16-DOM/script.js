
// //! DOM (DOCUMENT OBJECT MODEL)
// // // document.getElementById()
// // let btn = document.getElementById("btn");
// // console.log(btn);
// // console.log(btn.textContent);

// // // document.getElementsByClassName()
// // let divs = document.getElementsByClassName("container");
// // console.log(divs); //HTMLCollection[div,div,div]
// // console.log(divs[0].textContent);

// // //! to check array is pure or not :- Array.isArray()
// // console.log(Array.isArray(divs)); //false

// // //! to convert impure array to pure array :- Array.from()
// // let pureArr = Array.from(divs);
// // console.log(pureArr);

// // console.log(Array.isArray(pureArr)); // true

// // // document.getElementsByTagName()
// // let paragraphs = document.getElementsByTagName("p")
// // console.log(paragraphs);//HTMLCollection(3) [p, p, p]
// // console.log(paragraphs[1].textContent);

// // document.querySelector()

// let x = document.querySelector("#btn");
// console.log(x);

// let y = document.querySelector(".container");
// console.log(y);

// let z = document.querySelector("p");
// console.log(z);

// // document.querySelectorAll()
// let m = document.querySelectorAll("div");
// console.log(m);

// console.log(Array.isArray(m)); //false

// m.forEach((ele) => {
//   console.log(ele.textContent);
// });

//! DOM EVENTS

// onclick()
function singleclick() {
    console.log("single clicked");
  }
  // ondblclick()
  function doubleclick() {
    console.log("double clicked");
  }
  // onmouseenter()
  function btnhover() {
    console.log("mouse entered");
  }
  // onmouseleave
  function mouseleave() {
    console.log("mouse left");
  }
  // onmousemove()
  function mousemove() {
    console.log("mouse moved");
  }
  // onscroll()
  function scroll1() {
    console.log("paragraph scrolled");
  }
  // onload()
  function webpageLoad() {
    console.log("Webpage loaded");
  }
  
  // onkeydown()
  function keydown() {
    console.log("key is pressed");
  }
  
  // onkeyup()
  function keyup() {
    console.log("Key is released");
  }
  
  // onchange()
  function keychange() {
    console.log("changed");
  }
  