import {elements, form} from './base';



const displayDetails = contact => {
    

    if (elements.detailsPage.classList.contains('hidden')) {
        elements.detailsPage.classList.remove('hidden');
    }

    
    
    document.querySelector('.contact-details__form ul').insertAdjacentHTML('afterbegin', form);
    
    document.querySelector(".contact-details__form .input--first-name").value = contact.firstName;
    document.querySelector(".contact-details__form .input--last-name").value = contact.lastName;
    document.querySelector(".contact-details__form .input--email").value = contact.email;
    document.querySelector(".contact-details__form .input--phone-prefix").value = contact.phonePrefix;
    document.querySelector(".contact-details__form .input--phone-num").value = contact.phoneNum;
    document.querySelector(".contact-details__form .input--street").value = contact.street;
    document.querySelector(".contact-details__form .input--city").value = contact.city;
    document.querySelector(".contact-details__form .input--zip-code").value = contact.zip;
    document.querySelector(".contact-details__form .input--birth-date").value = contact.birthDate;

    document.querySelector(".contact-details__form li").setAttribute('data-itemid', contact.id);
}


export const displayDetailsPage = (contactList, contactID) => {
    
    
    // 1. get the contact data via the given id 
    let curContact = {};
    contactList.forEach(contact => { 
        if(contact.id === contactID) {
            curContact = contact;
        }
    });

    console.log(curContact)
    
    // 3. display the details page
    displayDetails(curContact);

    return curContact;
}