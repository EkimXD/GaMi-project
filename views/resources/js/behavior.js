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

    small_inputWarning(element, texto) {
        const smallCorreo = element.parentElement.getElementsByTagName('small').item(0);
        smallCorreo.textContent = texto;
        smallCorreo.classList.add('text-muted-red');
        element.classList.add('background-red');
    }

    small_inputNormal(element, texto) {
        const smallCorreo = element.parentElement.getElementsByTagName('small').item(0);
        smallCorreo.textContent = texto;
        smallCorreo.classList.remove('text-muted-red');
        element.classList.remove('background-red');
    }

    sent_email_code(){


    }
}