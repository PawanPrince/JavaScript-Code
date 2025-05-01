// let btn = document.createElement("button")
// btn.textContent = "Click Me"
// btn.addEventListener("click",()=>{
//     console.log("Btn Clicked")
// });
// document.body.append(btn)

//!   RAINBOW TASK USING ADD EVENT LISTENER
// let allDivs = document.querySelectorAll("div");
// console.log(allDivs);
// allDivs.forEach((ele) => {

//     ele.addEventListener("mouseenter", () => {
//         console.log(ele.textContent);
//         ele.style.backgroundColor = ele.textContent;
//     });
//     ele.addEventListener("mouseleave", () => {
//         ele.style.backgroundColor = "white";
//     });
// });





//! here i created 3 boxes inside each.

let section = document.querySelector("section");
let article = document.querySelector("article");
let div = document.querySelector("div");

section.addEventListener("click", () => {
    console.log("Section Clicked");
    
section.style.backgroundColor = "red";
},0)
article.addEventListener("click", () => {
    console.log("Article Clicked");
    article.style.backgroundColor = "blue";
},0)
div.addEventListener("click", () => {
    console.log("Div Clicked");
    div.style.backgroundColor = "green";
},0)


section.addEventListener("click", (e) => {
    console.log("Section" );
    e.stopPropagation(); // stop the event from bubbling up to the parent elements.
})
article.addEventListener("click", (e) => {
console.log("Article" );
e.stopPropagation(); // stop the event from bubbling up to the parent elements.
})
div.addEventListener("click", (e) => {
console.log("Div" );
e.stopPropagation(); // stop the event from bubbling up to the parent elements.
})

//! Event Propagation
div.addEventListener("click", (e) => {
    console.log("i am 2nd added event listener on div");
},0)

    

// Capturing face : root element to target.
// Bubbling face  : target to root element.