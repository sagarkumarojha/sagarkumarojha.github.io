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

const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.navlist li');

navLi.forEach(li=> {
   console.log(li);
})

window.addEventListener('scroll', ()=>{
   let curr = '';

   sections.forEach(section =>{
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if(pageYOffset +100 >= sectionTop){
         curr = section.getAttribute('id');
      }
      navLi.forEach(li=>{
         li.classList.remove('active');
         if(li.classList.contains(curr + '_nav')){
            li.classList.add('active');
         }
      })
   })
})


const resume1 = document.querySelector("#resume-link-1");

resume1.addEventListener("click", function(){
   window.open('https://drive.google.com/file/d/1ELemnXDS_l6Kc1_dEFYaXRJjhyl2yuwZ/view?usp=sharing')
})

const resume2 = document.querySelector("#resume-button-2");

resume2.addEventListener("click", function(){
   window.open('https://drive.google.com/file/d/1ELemnXDS_l6Kc1_dEFYaXRJjhyl2yuwZ/view?usp=sharing')
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
