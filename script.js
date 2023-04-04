//Typing-text.
var typed = new Typed(".auto-type", {
   strings: ["Java Backend Developer.","Front End Web Developer","Full Stack Web Developer","Problem Solver." ],
   typeSpeed: 100,
   backSpeed: 100,
   loop: true
})
//-----------Navbar--------------------------------
const header = document.querySelector("header");

window.addEventListener("scroll", function(){
   header.classList.toggle("sticky", this.window.scrollY>0); 
})
const resume1 = document.querySelector("#resume-link-1");

resume1.addEventListener("click", function(){
   window.open('https://drive.google.com/file/d/1U3Q-wQOstzXbzVU9jkT2Z5_AwseuIH2a/view?usp=share_link')
})

const resume2 = document.querySelector("#resume-link-2");

resume2.addEventListener("click", function(){
   window.open('https://drive.google.com/file/d/1U3Q-wQOstzXbzVU9jkT2Z5_AwseuIH2a/view?usp=share_link')
})

// --------------GitHub-Calender--------------------

// ---------Menu responsive-------

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
   menu.classList.toggle('bx-x');
   navlist.classList.toggle('active');
}

window.onscroll = () => {
   menu.classList.remove('bx-x');
   navlist.classList.remove('active');
}

// -------------- Scroll -------------------
const  sr = ScrollReveal ({
   distance: '20px',
   duration: 1500,
   reset: false
})
