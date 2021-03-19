import {elements, maxDate, form} from './base';


const renderEdit = contact => {

    // show the edit page
    if (elements.editPage.classList.contains('hidden')) {
        elements.editPage.classList.remove('hidden');
    }

    // display edit form
    document.querySelector('.edit-contact__form ul').insertAdjacentHTML('afterbegin', form);
    
    // set input values for the current contact
    document.querySelector(".edit-contact .input--first-name").value = contact.firstName;
    document.querySelector(".edit-contact .input--last-name").value = contact.lastName;
    document.querySelector(".edit-contact .input--email").value = contact.email;
    document.querySelector(".edit-contact .input--phone-prefix").value = contact.phonePrefix;
    document.querySelector(".edit-contact .input--phone-num").value = contact.phoneNum;
    document.querySelector(".edit-contact .input--street").value = contact.street;
    document.querySelector(".edit-contact .input--city").value = contact.city;
    document.querySelector(".edit-contact .input--zip-code").value = contact.zip;
    document.querySelector(".edit-contact .input--birth-date").value = contact.birthDate;

    document.querySelector(".edit-contact__form li").setAttribute('data-itemid', contact.id);

    // limit date value
    maxDate();
}

export const displayEditPage = (contactList, contactID) => {
     // 1. get the contact data via the given id 
     let curContact = {};
     contactList.forEach(contact => { 
        if(contact.id === contactID) {
            curContact = contact;
        }
    });

     // 2. render the edit page for that contact 
     renderEdit(curContact);

}

export const getInput = () => {

    // get new input data 
    return { 
        id: document.querySelector(".edit-contact li").getAttribute('data-itemid'),
        firstName: document.querySelector(".edit-contact .input--first-name").value,
        lastName: document.querySelector(".edit-contact .input--last-name").value,
        email: document.querySelector(".edit-contact .input--email").value,
        phonePrefix: document.querySelector(".edit-contact .input--phone-prefix").value,
        phoneNum: document.querySelector(".edit-contact .input--phone-num").value,
        street: document.querySelector(".edit-contact .input--street").value,
        city: document.querySelector(".edit-contact .input--city").value,
        zipCode: document.querySelector(".edit-contact .input--zip-code").value,
        birthDate: document.querySelector(".edit-contact .input--birth-date").value,
    }
}