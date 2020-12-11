let isMobile = {
    Android: function() {return navigator.userAgent.match(/Android/i);},
    BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
    IOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
    Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
    Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
    any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.IOS() || isMobile.Opera() || isMobile.Windows() ); }
};

let body=document.querySelector('body');

if(isMobile.any()){
    body.classList.add('touch');
    let arrow=document.querySelectorAll('.arrow');

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

    document.querySelector('.main-menu__burger').addEventListener('click', function() {
        document.querySelector('.main-menu__burger').classList.toggle('active');
        document.querySelector('.main-menu').classList.toggle('open');
        document.querySelector('body').classList.toggle('lock');
    });

}else{
    body.classList.add('mouse');
}
