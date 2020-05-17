let inicialization = 1;
document.addEventListener("DOMContentLoaded", init);

function init() {
    const bar_movil_btn = document.getElementById('button-bar-movil');
    bar_movil_btn.addEventListener('click', showSidebar);
    setInterval(chageHeader, 15000);
    scrollReveal();
    window.addEventListener('scroll', scrollEvent);
}

function scrollEvent(e) {
    const scroll_y=window.scrollY;
    const header=document.getElementsByTagName('header').item(0).getBoundingClientRect();
    const explorar=document.getElementById('explorar').getBoundingClientRect();
    const nosotros=document.getElementById('nosotros').getBoundingClientRect();

    const inicio_bar=document.getElementById('inicio-bar');
    const explorar_bar=document.getElementById('explorar-bar');
    const nosotros_bar=document.getElementById('nosotros-bar');

    if(header.top-70<=scroll_y<header.bottom-70){
        inicio_bar.classList.add('bar-selected');
        explorar_bar.classList.remove('bar-selected');
    }else if (explorar.top-70 <= scroll_y< explorar.bottom-70){
        explorar_bar.classList.add('bar-selected');
        inicio_bar.classList.remove('bar-selected');
        nosotros_bar.classList.remove('bar-selected');
    }else if(nosotros.top -70<= scroll_y < nosotros.bottom-70){
        explorar_bar.classList.remove('bar-selected');
        nosotros_bar.classList.add('bar-selected');
    }
}

function scrollReveal() {
    ScrollReveal().reveal('.explorar', {delay: 500});
    ScrollReveal().reveal('.nosotros', {delay: 500});
    // ScrollReveal().reveal('.redes-sociales>a', {delay: 500});
}

function showSidebar() {
    const sidebar = document.getElementsByClassName('sidebar').item(0);
    sidebar.classList.toggle('showSidebar');
}

function chageHeader() {
    const div_header = document.getElementsByClassName('header-imgs').item(0);
    div_header.style.backgroundImage = "url('../images/header_imgs/foto" + inicialization + ".jpg')";
    if (inicialization >= 4) {
        inicialization = 1;
    } else {
        inicialization++;
    }
}

function resizeInput() {
    const input_bar = document.getElementById('search-input-bar');
    input_bar.style.width = "150px";
    input_bar.focus();
    input_bar.addEventListener("focusout", () => {
        input_bar.style.width = "0";
    });
}

function barElementFocus() {
    console.log('scrolled');
}