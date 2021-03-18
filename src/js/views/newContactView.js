import {elements} from './base';



// display the New contact page
export const displayNewContactPage = () => {
    if (elements.newContactPage.classList.contains('hidden')) {
        elements.newContactPage.classList.remove('hidden');
    }
}

export const clearInputFields = () => {
    elements.getInputFields('.new-contact').forEach(field => {
        field.value = "";
        if (field.classList.contains('.input--phone-prefix')) {
            field.selectedIndex = 1;
    }
})
};

export const getInput = () => {
        return {
            firstName: elements.firstNameInput.value,
            lastName: elements.lastNameInput.value,
            email: elements.emailInput.value,
            phonePrefix: elements.phonePrefixInput.value,
            phoneNum: elements.phoneNumInput.value,
            street: elements.streetInput.value,
            city: elements.cityInput.value,
            zipCode: elements.zipInput.value,
            birthDate: elements.dateInput.value,
        }
}