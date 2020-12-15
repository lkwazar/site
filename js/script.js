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

if(isMobile.any()){
    body.classList.add('touch');
    let arrow=document.querySelectorAll('.arrow');

    btnBurger.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleBurger();
        toggleMenu();
        body.classList.toggle('lock');
        
    });

    for(i=0; i<arrow.length; i++){
        let thisLink=arrow[i].previousElementSibling;
        let subMenu=arrow[i].nextElementSibling;
        let thisArrow=arrow[i];

        thisLink.classList.add('parent');
        
        arrow[i].addEventListener('click', function(){
            subMenu.classList.toggle('open');
            thisArrow.classList.toggle('active');
        });
    }

    // document.addEventListener('click', function(e) {
    //     const target = e.target;
    //     const its_menu = target == menu || menu.contains(target);
    //     const its_btnBurger = target == btnBurger;
    //     const menu_is_active = menu.classList.contains('open');

    //     if (!its_menu && !its_btnBurger && menu_is_active) {
    //         toggleBurger();
    //         toggleMenu();
    //     }
    // });

}else{
    body.classList.add('mouse');
}
