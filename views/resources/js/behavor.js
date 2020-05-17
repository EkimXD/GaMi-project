let inicialization = 1;
document.addEventListener("DOMContentLoaded", init);

function init() {
    const bar_movil_btn = document.getElementById('button-bar-movil');
    bar_movil_btn.addEventListener('click', showSidebar);
    setInterval(chageHeader, 15000);
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
    input_bar.addEventListener("focusout",()=>{
        input_bar.style.width = "0";
    });
}

function barElementFocus() {
    this.classList.toggle('bar-selected');
}