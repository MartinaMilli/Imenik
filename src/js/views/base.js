export const elements = {
    header: document.querySelector('.header'),
    hamburgerMenu: document.querySelector(".navbar__menu"),
    newContactForm: document.querySelector(".new-contact__form"),
    myContactsTable: document.querySelector(".my-contacts__list"),

    // input fields
    inputFields: document.querySelectorAll(".new-contact .input"),
    firstNameInput: document.querySelector(".new-contact .input--first-name"),
    lastNameInput: document.querySelector(".new-contact .input--last-name"),
    emailInput: document.querySelector(".new-contact .input--email"),
    phonePrefixInput: document.querySelector(".new-contact .input--phone-prefix"),
    phoneNumInput: document.querySelector(".new-contact .input--phone-num"),
    streetInput: document.querySelector(".new-contact .input--street"),
    cityInput: document.querySelector(".new-contact .input--city"),
    zipInput: document.querySelector(".new-contact .input--zip-code"),
    dateInput: document.querySelector(".new-contact .input--birth-date"),

    // links and btns
    newContactLinks: document.querySelectorAll('.js__new-contact-link'),
    saveBtn: document.querySelector('.js__save-btn'),
    pagination: document.querySelector('.my-contacts__pagination'),
    //pages
    pages: document.querySelectorAll('.js__page'),
    homePage: document.querySelector('.js__page--home'),
    newContactPage: document.querySelector('.js__page--new-contact'),
    myContactsPage: document.querySelector('.js__page--my-contacts'),

    getInputFields: (selector) => {
        return document.querySelectorAll(selector + ' .input');
    }
}





export const toggleHamburger = () => {
    
    if (elements.header.classList.contains("open")) {
        elements.header.classList.remove("open");
        document.querySelectorAll(".has-fade").forEach((el) => {
            el.classList.add("fade-out");
            el.classList.remove("fade-in")
        });
    
    } else {
        elements.header.classList.add("open");
        document.querySelectorAll(".has-fade").forEach((el) => {
            el.classList.add("fade-in");
            el.classList.remove("fade-out")
        });       
    }
}

// clear UI by adding class hidden to those elements that do not have it
// class hidden applies the display: none style on the element 
export const clearUI = () => {
        elements.pages.forEach(page => {
        if (!(page.classList.contains('hidden'))) {
            page.classList.add('hidden')
        }
        if (elements.header.classList.contains('open')) {
            toggleHamburger();
        }
    });
}

