 const galleryImg = document.querySelectorAll('.gallery img');
const menuBtnBurger = document.querySelector('.menu-btn_burger');
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('nav');
const navLi = document.querySelectorAll('nav ul li');
let menuOpen;

console.log(navLi);

//toggle  menu //
function toggleNav() {
  if (!menuOpen) {
    menuBtnBurger.classList.add('open');
    nav.classList.add('open');
  } else if (menuOpen) {
    menuBtnBurger.classList.remove('open');
    nav.classList.remove('open');
  }
  return menuOpen = !menuOpen;
}


// gallery animation while scrolled in //
 function debounce(func, wait = 20, immediate = true) {
   var timeout;
   return function() {
     var context = this, args = arguments;
     var later = function() {
       timeout = null;
       if (!immediate) func.apply(context, args);
     };
     var callNow = immediate && !timeout;
     clearTimeout(timeout);
     timeout = setTimeout(later, wait);
     if (callNow) func.apply(context, args);
   };
 };

 function checkSlide() {
   galleryImg.forEach(img => {
     const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
     const imageBottom = img.offsetTop + img.height;
     const isHalfShown = slideInAt > img.offsetTop;
     const isNotScrolledPast = window.scrollY < imageBottom;
     if (isHalfShown && isNotScrolledPast) {
       img.classList.add('img-animated');
     } else {
       img.classList.remove('img-animated');
     }
   });
 }

 menuBtn.addEventListener('click', toggleNav);
navLi.forEach(li => li.addEventListener("click", toggleNav));
 window.addEventListener('scroll', debounce(checkSlide));
