let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    IOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows() ); }
};

const btnBurger = document.querySelector('.main-menu__burger');
const menu =  document.querySelector('.main-menu');
const body = document.querySelector('body');
const toggleMenu = function() {
    menu.classList.toggle('open');
}
const toggleBurger = function() {
    btnBurger.classList.toggle('active');
}

if(isMobile.any()) {
    body.classList.add('touch');
    let arrow=document.querySelectorAll('.arrow');

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

// =================================================================================

// <Картинка (img) в фон (background-image)>
function ibg() {
    var ibg = document.querySelectorAll('.ibg');

    for (i=0; i<ibg.length; i++) {
        if(ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }          
    }
}

ibg();
// </Картинка (img) в фон (background-image)>

// =================================================================================

// <События при изменении окна браузера>
window.addEventListener('resize', adaptiveFunction);

function adaptiveHeader(w,h) {
    var search = document.querySelector('.search-form');
    var switchPanel = document.querySelector('.main-menu__list');
    var headerBottom = document.querySelector('.header-bottom__row');

    if(w < 621) {
        // Не работает в IE - switchPanel.before(search);
        switchPanel.insertAdjacentElement('beforeBegin', search);
    }else{
        // Не работает в IE - headerBottom.append(search);
        headerBottom.insertAdjacentElement('beforeEnd', search);
    }
}

function adaptiveFunction() {
    var w = window.innerWidth;
    var h = window.innerHeight;

    adaptiveHeader(w,h);
}

adaptiveFunction();
// </События при изменении окна браузера>
