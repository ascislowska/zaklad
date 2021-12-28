 let galleryImg = document.querySelectorAll('.gallery img');


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

 window.addEventListener('scroll', debounce(checkSlide));
