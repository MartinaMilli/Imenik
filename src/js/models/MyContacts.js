export default class MyContacts {
    constructor () {
        this.myContactList = [];
    }

    addContact(newContact) {
        this.myContactList.push(newContact);

        // Perist data in localStorage
        this.persistData();
    }

    persistData() {
        localStorage.setItem('contacts', JSON.stringify(this.myContactList));
    }

    readStorage() {
        const storage = JSON.parse(localStorage.getItem('contacts'));
        
        // Restoring likes from the localStorage
        if (storage) this.myContactList = storage;
    }
}