import {elements, maxDate} from './base';


const renderEdit = contact => {
    elements.editForm.innerHTML="";
    const markup = `
    <li class="form-element flex" data-itemid=${contact.id}> 
        <div class="input-container flex"> 
            <label for="first-name">Ime</label>
            <input type="text" name="first-name" id="first-name" class="input input--first-name" value="${contact.firstName}" size="21"  maxlength="15" required>
        </div>
        <div class="input-container flex">
            <label for="last-name">Prezime</label>
            <input type="text" name="last-name" id="last-name" class="input input--last-name" value="${contact.lastName}" size="21"  maxlength="15" required>
        </div>
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="e-mail">E-mail</label>
            <input type="text" name="e-mail" id="e-mail" class="input input--email" size="21"  maxlength="25" value="${contact.email}" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="primjer@gmail.com" required>
        </div>
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="phone">Telefon</label>
            <div class="input-container--phone flex"> 
                <select name="phone" id="phone" class="input input--phone-prefix" required>
                    <option value="${contact.phonePrefix}" selected>${contact.phonePrefix}</option>
                    <option value="091">091</option>
                    <option value="092">092</option>
                    <option value="095">095</option>
                    <option value="097">097</option>
                    <option value="098">098</option>
                    <option value="099">099</option>
                </select>
                <input type="text" name="phone-num" id="phone-num" class="input input--phone-num" value="${contact.phoneNum}" size="21"  maxlength="7" required>
            </div>
        </div>                  
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="address">Adresa</label>
            <div class="input-container--address flex">
                <input type="text" name="address" id="address" placeholder="Ulica i kućni broj" class="input input--street" value="${contact.street}" size="21"  maxlength="30" required>
                <input type="text" name="city" id="city" placeholder="Grad"  class="input input--city" value="${contact.city}" size="21"  maxlength="30" required>
                <input type="text" name="zip-code" id="zip-code" placeholder="Poštanski broj" class="input input--zip-code" value="${contact.zip}" size="21"  maxlength="30" required> 
            </div>
        </div>
    </li>
    <li class="form-element flex">
        <div class="input-container flex">
            <label for="birth-date">Datum rođenja</label>
            <input type="date" name="birth-date" id="birth-date" class="input input--birth-date" value="${contact.birthDate}" required>
        </div>
    </li>
    `;
    elements.editForm.insertAdjacentHTML('afterbegin', markup);
    maxDate();
}

const displayEdit = () => {
    if (elements.editPage.classList.contains('hidden')) {
        elements.editPage.classList.remove('hidden');
    }
}

export const displayEditPage = (contactList, contactID) => {
     // 1. get the contact data via the given id 
     let curContact = {};
     contactList.forEach(contact => { 
         if(contact.id === contactID) {
             curContact = contact;
         }
     });
     console.log(curContact)
 
     // 2. render the edit page for that contact 
     renderEdit(curContact);

     // 3. display the edit page
     displayEdit();


}

export const getInput = () => {
    
    return {
        // nisu u elementima jer još ne postoje 
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