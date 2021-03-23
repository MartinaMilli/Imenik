import {elements, form, asignValues} from './base';

const displayDetails = contact => {
    // clear the previously rendered form
    document.querySelector('.contact-details__form ul').innerHTML = "";

    // show the display page
    if (elements.detailsPage.classList.contains('hidden')) {
        elements.detailsPage.classList.remove('hidden');
    }

    // insert the general form markup
    document.querySelector('.contact-details__form ul').insertAdjacentHTML('afterbegin', form);

    // get input fields on the screen
    const inputs = document.querySelectorAll('.contact-details__form .input');

    // asign contact data to input fields
    asignValues(inputs, contact);
    document.querySelector(".contact-details__form li").setAttribute('data-itemid', contact.id);

    // set the input fields to be readonly/disabled for the dropdown
    document.querySelectorAll('.contact-details__form .input').forEach(input => {
        input.setAttribute('readonly', 'readonly');
    });
    document.querySelector(".contact-details__form .input--phone-prefix").setAttribute('disabled', 'disabled');
}


export const displayDetailsPage = (contactList, contactID) => {
    
    // 1. get the contact data via the given id 
    let curContact = {};
    contactList.forEach(contact => { 
        if(contact.id === contactID) {
            curContact = contact;
        }
    });

    // 2. display the details page
    displayDetails(curContact);

    return curContact;
}