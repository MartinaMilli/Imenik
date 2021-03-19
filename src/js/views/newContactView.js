import {elements, maxDate, form} from './base';


export const clearInputFields = () => {
    elements.getInputFields('.new-contact').forEach(field => {
        field.value = "";
        if (field.classList.contains('.input--phone-prefix')) {
            field.selectedIndex = 1;
    }
})
};

// display the New contact page
export const displayNewContactPage = () => {
    document.querySelector('.new-contact__form ul').innerHTML = "";

    if (elements.newContactPage.classList.contains('hidden')) {
        elements.newContactPage.classList.remove('hidden');
    }
    document.querySelector('.new-contact__form ul').insertAdjacentHTML('afterbegin', form);
    maxDate();
}

export const getInput = () => {
        return {
            firstName: document.querySelector(".new-contact .input--first-name").value,
            lastName: document.querySelector(".new-contact .input--last-name").value,
            email: document.querySelector(".new-contact .input--email").value,
            phonePrefix: document.querySelector(".new-contact .input--phone-prefix").value,
            phoneNum: document.querySelector(".new-contact .input--phone-num").value,
            street: document.querySelector(".new-contact .input--street").value,
            city: document.querySelector(".new-contact .input--city").value,
            zipCode: document.querySelector(".new-contact .input--zip-code").value,
            birthDate: document.querySelector(".new-contact .input--birth-date").value,
        }
}