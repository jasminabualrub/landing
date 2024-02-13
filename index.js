let navbar=document.querySelector('header');
let courses=document.querySelector('.courses');
window.onscroll=function(){

    if(window.scrollY > courses.offsetTop){
        navbar.classList.add('colorJS');
    }
    else{
        navbar.classList.remove('colorJS');
    }
}
