document.addEventListener("DOMContentLoaded", init);

function init() {
   const bar_movil_btn=document.getElementById('button-bar-movil');

   bar_movil_btn.addEventListener('click', showSidebar);
}

function showSidebar() {
    const sidebar=document.getElementsByClassName('sidebar').item(0);
    console.log(sidebar);
    // document.body.classList.toggle('showSidebar');
    sidebar.classList.toggle('showSidebar');
}
