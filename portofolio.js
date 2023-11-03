

/* Sticky navbar */
var menu = document.getElementById("menu");
var navmenu = document.getElementById("navmenu");


window.onscroll = function (){
   if(window.pageYOffset >= navmenu.offsetTop){
       menu.classList.add("sticky");
   }
   else{
       menu.classList.remove("sticky");
   }
}

/* Responsive mobile burguer menu */

var hamburguer= document.querySelector(".hamburguer");
var navmenu = document.getElementById("navmenu");


hamburguer.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburguer.classList.toggle("active");
    navmenu.classList.toggle("active");
}



/* Close the mobile view menu */

var navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener ("click", closeMenu));

function closeMenu() {
    hamburguer.classList.remove("active");
    navmenu.classList.remove("active");
}



/** dakr mode toogle */

$(document).ready(function() {
    $('#toggle-theme').click(function() {
        $('body').toggleClass('dark-mode');
        $('header, main, footer, nav a').toggleClass('dark-mode');
    });
});
