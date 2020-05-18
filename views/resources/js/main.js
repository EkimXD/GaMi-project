document.addEventListener("DOMContentLoaded", init);

class Behavior {
    constructor() {
    }

    scrollReveal(classes) {
        classes.forEach(element => {
            ScrollReveal().reveal(element, {delay: 500});
        });
    }

    showSidebarLeft(element) {
        element.classList.toggle('showSidebar');
    }

    changeImages(element, nImages, timeInterval) {
        let pib = 1;
        setInterval(() => {
            element.style.backgroundImage = "url('../images/header_imgs/foto" + pib + ".jpg')";
            if (pib >= nImages) {
                pib = 1;
            } else {
                pib++;
            }
        }, timeInterval);
    }

    resizeElementFocus(element, widht) {
        element.style.width = widht + "px";
        element.focus();
        element.addEventListener("focusout", () => {
            element.style.width = "0";
        });
    }

    resizeElement(element, widht) {
        element.style.width = widht + "px";
    }

    scrollEvent(element, elementTarget, clase, variant = 0) {
        const scroll_y = window.scrollY;
        const elementSizing = element.getBoundingClientRect();

        if ((elementSizing.top + variant + scroll_y) <= scroll_y && scroll_y < (elementSizing.bottom + variant + scroll_y)) {
            elementTarget.classList.add(clase);
        } else {
            elementTarget.classList.remove(clase);
        }
    }
}

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