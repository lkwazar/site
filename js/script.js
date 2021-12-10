let parentLink = document.querySelectorAll('.parent');

for(i=0; i<parentLink.length; i++) {
   let subMenu = parentLink[i].nextElementSibling;
   let thisArrow = parentLink[i];

   parentLink[i].addEventListener('click', function(e) {
      e.stopPropagation();
      e.preventDefault();
      subMenu.classList.toggle('open');
      thisArrow.classList.toggle('active');

      if (subMenu.style.height) {
         subMenu.style.height = subMenu.scrollHeight + "px";
         setTimeout(function() {
            subMenu.style.height = null;
         }, 50);
       } else {
         console.log(subMenu);
         subMenu.style.height = subMenu.scrollHeight + "px";
         setTimeout(function() {
            subMenu.style.height = "auto";
          }, 200);
       } 

   });
}