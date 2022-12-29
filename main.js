import './style.css'

let div1 = document.getElementById("div1")
let subtexto1 = document.getElementById("subtext1")
subtexto1.style.display = "none"

let div2 = document.getElementById("div2")
let subtexto2 = document.getElementById("subtext2")
subtexto2.style.display = "none"

let div3 = document.getElementById("div3")
let subtexto3 = document.getElementById("subtext3")
subtexto3.style.display = "none"

let div4 = document.getElementById("div4")
let subtexto4 = document.getElementById("subtext4")
subtexto4.style.display = "none"

div1.addEventListener("mouseover", () => {
    subtexto1.style.display = "block";

});

div1.addEventListener("mouseout", () => {
    subtexto1.style.display = "none";
});

div2.addEventListener("mouseover", () => {
    subtexto2.style.display = "block";
});

div2.addEventListener("mouseout", () => {
    subtexto2.style.display = "none";
});

div3.addEventListener("mouseover", () => {
    subtexto3.style.display = "block";
});

div3.addEventListener("mouseout", () => {
    subtexto3.style.display = "none";
});

div4.addEventListener("mouseover", () => {
    subtexto4.style.display = "block";
});

div4.addEventListener("mouseout", () => {
    subtexto4.style.display = "none";
});