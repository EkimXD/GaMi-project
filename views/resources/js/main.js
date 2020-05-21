document.addEventListener("DOMContentLoaded", init);

function init() {
    const behavior = new Behavior();

    const bar_movil_btn = document.getElementById('button-bar-movil');
    const sidebar = document.getElementsByClassName('sidebar').item(0);
    const div_header = document.getElementsByClassName('header-imgs').item(0);
    const bar_search_btn = document.getElementById('button-bar-search');
    const input_bar = document.getElementById('search-input-bar');
    const header = document.getElementsByTagName('header').item(0);
    const explorar = document.getElementById('explorar');
    const nosotros = document.getElementById('nosotros');
    const inicio_bar = document.getElementById('inicio-bar');
    const explorar_bar = document.getElementById('explorar-bar');
    const nosotros_bar = document.getElementById('nosotros-bar');

    bar_movil_btn.addEventListener('click', () => {
        behavior.showSidebarLeft(sidebar)
    });
    behavior.changeImages(div_header, 4, 10000);
    behavior.scrollReveal(['.explorar', '.nosotros']);
    bar_search_btn.addEventListener('click', () => {
        behavior.resizeElementFocus(input_bar, 150)
    });
    window.addEventListener('scroll', () => {
        behavior.scrollEvent(header, inicio_bar, 'bar-selected', -70);
        behavior.scrollEvent(explorar,explorar_bar,'bar-selected',-70);
        behavior.scrollEvent(nosotros,nosotros_bar,'bar-selected',-70);
    });
}