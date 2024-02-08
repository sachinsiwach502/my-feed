let circle = document.querySelector(".inpu-box");
let radio = document.querySelector(".input-box");
circle.addEventListener("click", function () {
    if (radio === checked) {
        circle.style.backgroundColor = "black";
    } else {
        circle.style.backgroundColor = "white";
    }
});
if (radio === checked) {
    onclick.circle.backgroundColor = "black"
} else {
    onclick.circle.backgroundColor = "white"
}

let sp = 1;
let id = document.getElementsByClassName(".following");
id.addEventListener("click", function () {
    if (sp == 1) {
        id.forEach(e => e.innerHTML = "following");
        sp = 2;
    } else {
        id.forEach(e => e.innerHTML = "follow");
        sp = 1;
    }
});