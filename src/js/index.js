import { elements, toggleHamburger, clearUI } from "./views/base";
import * as newContactView from "./views/newContactView";
import * as myContactsView from "./views/myContactsView";
import * as homepageView from "./views/homepageView";
import Contact from "./models/Contact";
import MyContacts from "./models/MyContacts";

/** GLOBAL STATE OF THE APP
 * contact object
 * contact list object
 */
const state = {};


// SWITCHING BETWEEN PAGES 
// Switching to the New contact page 
window.addEventListener('click', e => {
    if (e.target.matches('.js__new-contact-link')) {
        clearUI();
        newContactView.displayNewContactPage();
    }});


// Switching to the My contacts page
window.addEventListener('click', e => {
    if (e.target.matches('.js__my-contacts-link')) {
        clearUI();
        elements.pagination.innerHTML = '';
        myContactsView.displayMyContactsPage();
        myContactsView.renderTable(state.contactList.myContactList);
    }});


// Switching to the homepage
window.addEventListener('click', e => {
    if(e.target.matches('.js__homepage-link')) {
        clearUI();
        homepageView.displayHomepage();
    }
})

// Toggle the hamburger menu
elements.header.addEventListener('click', e => {
    if (e.target.matches('.navbar__menu') || e.target.matches('.navbar__menu--line')) {
        toggleHamburger();
    }
});


// pagination events 
elements.pagination.addEventListener('click', e => {
    elements.pagination.innerHTML = '';
    const btn = e.target.closest('a');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        elements.myContactsTable.innerHTML = '';
       /*  myContactsView.clearResults(); */
        myContactsView.renderTable(state.contactList.myContactList, goToPage);
    }
});

// NEW CONTACT CONTROLLER

const controlNewContact = () => {

    // 1. get input data
    const inputData = newContactView.getInput();
    console.log(inputData);
    // 2. create a new contact
    state.newContact = new Contact( 
        inputData.firstName, 
        inputData.lastName, 
        inputData.email,
        inputData.phonePrefix,
        inputData.phoneNum,
        inputData.street, 
        inputData.city, 
        inputData.zipCode, 
        inputData.birthDate);
        console.log(state.newContact);

    // 3. add the new contact to the list
    if(!state.contactList) {
        state.contactList = new MyContacts;
    }
    state.contactList.addContact(state.newContact);
    console.log(state.contactList)
    // 4. clear input fields
    newContactView.clearInputFields();
}

elements.newContactForm.addEventListener('submit', e => {
    e.preventDefault();
    controlNewContact()
})





// restore contacts after the page is reloaded 
window.addEventListener('load', () => {
   
    state.contactList = new MyContacts();
    
    // Restore likes
    state.contactList.readStorage();

});

