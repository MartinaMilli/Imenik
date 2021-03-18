import {elements, maxDate} from './base';



const renderDetails = contact => {
    elements.detailsForm.innerHTML="";
    const markup = `
    <li class="form-element flex" data-itemid=${contact.id}>
        <div class="input-container flex"> 
            <label for="first-name">Ime</label>
            <input type="text" name="first-name" id="first-name" class="input input--first-name" value="${contact.firstName}" size="23"  maxlength="15" readonly>
        </div>
        <div class="input-container flex">
            <label for="last-name">Prezime</label>
            <input type="text" name="last-name" id="last-name" class="input input--last-name" value="${contact.lastName}" size="23"  maxlength="15" readonly>
        </div>
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="e-mail">E-mail</label>
            <input type="text" name="e-mail" id="e-mail" class="input input--email" size="23"  maxlength="25" value="${contact.email}" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="primjer@gmail.com" readonly>
        </div>
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="phone">Telefon</label>
            <div class="input-container--phone flex"> <!-- zaduzen za postavljanje inputa jedan do drugog  -->
                <select name="phone" id="phone" class="input input--phone-prefix" disabled>
                    <option value="${contact.phonePrefix}" selected></option>
                    <option value="091">091</option>
                    <option value="092">092</option>
                    <option value="095">095</option>
                    <option value="097">097</option>
                    <option value="098">098</option>
                    <option value="099" selected>099</option>
                </select>
                <input type="text" name="phone-num" id="phone-num" class="input input--phone-num" value="${contact.phoneNum}" size="21"  maxlength="7" readonly>
            </div>
        </div>                  
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="address">Adresa</label>
            <div class="input-container--address flex">
                <input type="text" name="address" id="address" placeholder="Ulica i kućni broj" class="input input--street" value="${contact.street}" size="21"  maxlength="30" readonly>
                <input type="text" name="city" id="city" placeholder="Grad"  class="input input--city" value="${contact.city}" size="21"  maxlength="30" readonly>
                <input type="text" name="zip-code" id="zip-code" placeholder="Poštanski broj" class="input input--zip-code" value="${contact.zip}" size="21"  maxlength="30" readonly> 
            </div>
        </div>
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="birth-date">Datum rođenja</label>
            <input type="date" name="birth-date" id="birth-date" class="input input--birth-date" value="${contact.birthDate}" readonly>
        </div>
    </li> 
    `;

    elements.detailsForm.insertAdjacentHTML('afterbegin', markup);

}

const displayDetails = () => {
    if (elements.detailsPage.classList.contains('hidden')) {
        elements.detailsPage.classList.remove('hidden');
    }
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

    // 2. render the details page for that contact 
    renderDetails(curContact);

    // 3. display the details page
    displayDetails();

    maxDate();
    

    return curContact;
}