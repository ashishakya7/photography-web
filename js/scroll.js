let sky = document.getElementById("sky");
let background = document.getElementById("background");
let person = document.getElementById("person");
let birds = document.getElementById("birds");
let text = document.getElementById("text");

window.addEventListener('scroll', function(){
    var value = window.scrollY;
    background.style.top = value * 0.5 + 'px';
    birds.style.left = value * 0.5 + 'px';
    sky.style.top = -value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
});