// Your code goes here
// document.getElementsByClassName("nav-link").addEventListener("mouseover",() => ("nav-link").innerText = 'mouseOver');

// document.getElementsByClassName("nav-link").addEventListener("mouseleave", () => ("nav-link").innerText = 'mouseLeave');

// function mouseOver() {
//     document.getElementsByClassName("nav-link").style.color = "red";
// }

// function mouseLeave() {
//     document.getElementsByClassName("nav-link").style.color = "black";
// }

//top div color change
let myDiv = document.querySelector('div');

myDiv.addEventListener('mouseover', () => {
    myDiv.style.backgroundColor = 'red';
});

myDiv.addEventListener("mouseleave", () => {
  myDiv.style.backgroundColor = "white";
});

//Nav fun bus color change
let myH1 = document.querySelector("h1");

myH1.addEventListener("mouseover", () => {
  myH1.style.color = "blue";
});

myH1.addEventListener("mouseleave", () => {
  myH1.style.color = "black";
});

//Welcome to fun bus color change
let myH2 = document.querySelector("h2");

myH2.addEventListener("mouseover", () => {
  myH2.style.color = "blue";
});

myH2.addEventListener("mouseleave", () => {
  myH2.style.color = "black";
});

let myH2p = document.querySelector("p");

myH2p.addEventListener("mouseover", () => {
  myH2p.style.color = "blue";
});

myH2p.addEventListener("mouseleave", () => {
  myH2p.style.color = "black";
});

// Lets go

let myDiv2 = document.getElementsByTagName("div")[2];


myDiv2.addEventListener("mouseover", () => {
  myDiv2.style.backgroundColor = "red";
});

myDiv2.addEventListener("mouseleave", () => {
  myDiv2.style.backgroundColor = "white";
});

let myH22 = document.getElementsByTagName("h2")[1];

myH22.addEventListener("mouseover", () => {
  myH22.style.color = "blue";
});

myH22.addEventListener("mouseleave", () => {
  myH22.style.color = "black";
});

let myH2p1 = document.getElementsByTagName("p")[1];

myH2p1.addEventListener("mouseover", () => {
  myH2p1.style.color = "blue";
});

myH2p1.addEventListener("mouseleave", () => {
  myH2p1.style.color = "black";
});

//Adventure Awaits
let myDiv5 = document.getElementsByTagName("div")[5];

myDiv5.addEventListener("mouseover", () => {
  myDiv5.style.backgroundColor = "red";
});

myDiv5.addEventListener("mouseleave", () => {
  myDiv5.style.backgroundColor = "white";
});


//Bottom row
let myDiv6 = document.getElementsByTagName("div")[6];

myDiv6.addEventListener("mouseover", () => {
  myDiv6.style.backgroundColor = "red";
});

myDiv6.addEventListener("mouseleave", () => {
  myDiv6.style.backgroundColor = "white";
});

let myDiv8 = document.getElementsByTagName("div")[8];

myDiv8.addEventListener("mouseover", () => {
  myDiv8.style.backgroundColor = "red";
});

myDiv8.addEventListener("mouseleave", () => {
  myDiv8.style.backgroundColor = "white";
});

let myDiv10 = document.getElementsByTagName("div")[10];

myDiv10.addEventListener("mouseover", () => {
  myDiv10.style.backgroundColor = "red";
});

myDiv10.addEventListener("mouseleave", () => {
  myDiv10.style.backgroundColor = "white";
});
