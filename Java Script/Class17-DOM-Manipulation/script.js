// // How to create an elements.
// let divTag= document.createElement("div");
// let sectionTag = document.createElement("section");


// // How to add TextContent
// divTag.textContent = "I am Div, created by using <mark>JS</mark>"
// sectionTag.innerHTML = "I am Section tag, Created by <mark>JS</mark>"
// console.log(divTag);
// console.log(sectionTag);

// //? appendChild()       it accepts only one element as an argument
// document.body.appendChild(divTag);
// document.body.appendChild(sectionTag);

// // document.body.appendChild(divTag,sectionTag); //! not possible

// //? append()       it accepts multiple element as an argument
// document.body.append(divTag,sectionTag);


//!...New code below...


// //  Creating Elements
// let mainTag = document.createElement("main");
// let sectionTag = document.createElement("section");
// let h1Tag = document.createElement("h1");
// let imgTag = document.createElement("img");
// let buttonTag= document.createElement("button");

// //  Setting attributes
// mainTag.setAttribute("id", "maincontainer");
// sectionTag.setAttribute("class", "card");
// h1Tag.setAttribute("class","heading")
// imgTag.setAttribute("src","https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740");
// imgTag.setAttribute("alt","user Pic");

// //  Adding text content
// h1Tag.textContent= "Pawan Kumar"
// buttonTag.textContent= "Click Me";

// sectionTag.append(imgTag, buttonTag,h1Tag);
// mainTag.append(sectionTag);

// console.log(mainTag);

// // appending mainTag as a child of body
// document.body.append(mainTag);


//!  Adding event listener to button
let btn = document.createElement("button");
btn.textContent = "Click Me";

// !addEventListener(event,callbackfunction,use_capture)
btn.addEventListener("click",()=>{
    console.log("btn clicked");
    // alert("button clicked")
})
document.body.append(btn)
