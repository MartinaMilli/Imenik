import uniqid from 'uniqid';


export default class Contact {
    constructor (firstName, lastName, email, phonePrefix, phoneNum, street, city, zipCode, birthDate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.phoneNumber = phonePrefix + phoneNum;
        this.address = `${street}, ${zipCode}, ${city}`
        this.birthDate = birthDate;
        this.id = uniqid();
    }
};