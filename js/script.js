const menuIcon = document.getElementById('menuBt');
const nav = document.getElementsByClassName('nav-content')[0];
menuIcon.addEventListener('click',showMenu);

function showMenu(){
    if(nav.style.visibility == 'visible'){
        menuIcon.style.color = 'white';
        nav.style.marginTop = '-225px';
        nav.style.visibility = 'hidden';
    }else{
        menuIcon.style.color = 'grey';
        nav.style.visibility = 'visible';
        nav.style.marginTop = '20px';
    }
}

const firstImg = document.getElementById('img-sec-1');
const leftAr = document.getElementById('left-arrow');
const rightAr = document.getElementById('right-arrow');

leftAr.addEventListener('click', scroll2);
rightAr.addEventListener('click', scroll2);


