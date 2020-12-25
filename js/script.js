let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    IOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows() ); }
};

// =================================================================================

// <Меню по клику>
const btnBurger = document.querySelector('.main-menu__burger');
const menu =  document.querySelector('.main-menu');
const body = document.querySelector('body');
const accordion = document.querySelectorAll('.accordion');
const toggleMenu = function() {menu.classList.toggle('open');}
const toggleBurger = function() {btnBurger.classList.toggle('active');}

if(isMobile.any()) {
    body.classList.add('touch');
    let arrow=document.querySelectorAll('.arrow_touch');

    btnBurger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleBurger();
        toggleMenu();
        body.classList.toggle('lock');
        
    });

    for(i=0; i<arrow.length; i++) {
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];

        thisLink.classList.add('parent');
        
        arrow[i].addEventListener('click', function() {
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }

}else{
    body.classList.add('mouse');
}
// </Меню по клику>

// =================================================================================

// <"Аккордеон" меню>
for(i=0; i<accordion.length; i++) {
    let list=accordion[i].nextElementSibling;

    accordion[i].addEventListener('click', function() {
        this.classList.toggle('active');
        list.classList.toggle('open');
    });
}
// </"Аккордеон" меню>

// =================================================================================

// <Картинка (img) в фон (background-image)>
function ibg() {
    let ibg = document.querySelectorAll('.ibg');

    for (i=0; i<ibg.length; i++) {
        if(ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }          
    }
}
ibg();
// </Картинка (img) в фон (background-image)>

// =================================================================================
