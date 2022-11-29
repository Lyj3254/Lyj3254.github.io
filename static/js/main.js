(function ($) {
  "use strict";

    // Call all ready functions
    seacy_menuToggle();
    
})(window.jQuery);

function seacy_menuToggle() {
    "use-strict";

  // Variables
  let toggleMenu = document.querySelector('.toggle');
  let section = document.querySelector('#toggleMenu');

  toggleMenu.addEventListener('click',function(){
    toggleMenu.classList.toggle('active');
    section.classList.toggle('active');
  })
      
  
}