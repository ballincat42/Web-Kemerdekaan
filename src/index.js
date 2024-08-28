window.addEventListener('scroll', function() {
    const scroll = window.scrollY; // Use window.scrollY to get the scroll position
    const navEl = document.querySelector('#nav'); // Select the element with the class .clearheader
    const nameEl = document.querySelector('#name');

    if (scroll >= 50) {
       navEl.classList.add('bg-nav','backdrop-blur-sm');
       nameEl.classList.add('text-red-600');
       nameEl.classList.remove('text-white');
     } 
    else{
     navEl.classList.remove('bg-nav','backdrop-blur-sm');
     nameEl.classList.remove('text-red-600');
     nameEl.classList.add('text-white');
     }
       });

        //make the main anchor scroll smoothly    
   document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('anchorr').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
       });
     });
    });