export const elements = {
    header: document.querySelector('.header'),
    hamburgerMenu: document.querySelector(".navbar__menu"),
    newContactForm: document.querySelector(".new-contact__form"),
    detailsForm: document.querySelector('.contact-details__form ul'),
    editForm: document.querySelector('.edit-contact__form ul'),
    
    myContactsTable: document.querySelector(".my-contacts__list"),
    myContactsTableElements: document.querySelectorAll(".my-contacts__list li"),

    // new contact input fields
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
    saveBtn: document.querySelector('.js__save-contact-btn'),
    editBtn: document.querySelector('.js__save-changes-btn'),
    pagination: document.querySelector('.my-contacts__pagination'),
    
    //pages
    pages: document.querySelectorAll('.js__page'),
    homePage: document.querySelector('.js__page--home'),
    newContactPage: document.querySelector('.js__page--new-contact'),
    myContactsPage: document.querySelector('.js__page--my-contacts'),
    detailsPage: document.querySelector('.js__page--contact-details'),
    editPage: document.querySelector('.js__page--edit-contact'),

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

export const maxDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    document.querySelector("[type='date']").setAttribute("max", today);
}

