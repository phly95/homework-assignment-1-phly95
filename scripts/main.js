let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
// From https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics

var audio = document.getElementById("music");
audio.volume = 0.1;
// From https://stackoverflow.com/questions/33747398/html-audio-tag-volume
let foxy = "this fox steals text"
let finisher = document.getElementById(99);
finisher.innerHTML = '<img src="images/foxtake.gif" onmouseover="alert(foxy);"></img>';
// finisher.onmouseenter = (alert('this fox steals text'));

alert('👩‍💻Welcome to the website!🐔 visitor ' + vis());

let visitor = vis();

function vis() {
    return (new Date().getMinutes() * 100) + new Date().getSeconds();
}