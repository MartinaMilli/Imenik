export const elements = {
    // header elements
    header: document.querySelector('.header'),
    hamburgerMenu: document.querySelector(".navbar__menu"),

    //delete dialog elements
    deleteOverlay: document.querySelector(".delete-overlay"),
    deleteDialogBtns: document.querySelector(".dialog__btns"),
    deleteDialogMsg: document.querySelector(".contact-name"),

    //forms
    newContactForm: document.querySelector(".new-contact__form"),
    newContactTitle: document.querySelector(".new-contact__form h3"),
    detailsForm: document.querySelector('.contact-details__form ul'),
    editForm: document.querySelector('.edit-contact__form ul'), 
    
    // table elements
    myContactsTable: document.querySelector(".my-contacts__list"),
    myContactsTableElements: document.querySelectorAll(".my-contacts__list li"),

    // new contact input fields and paginaton
    inputFields: document.querySelectorAll(".new-contact .input"),
    pagination: document.querySelector('.my-contacts__pagination'),
    
    //pages
    pages: document.querySelectorAll('.js__page'),
    homePage: document.querySelector('.js__page--home'),
    newContactPage: document.querySelector('.js__page--new-contact'),
    myContactsPage: document.querySelector('.js__page--my-contacts'),
    detailsPage: document.querySelector('.js__page--contact-details'),
    editPage: document.querySelector('.js__page--edit-contact'),

    
    // get input fields for a specific page
    getInputFields: (selector) => {
        return document.querySelectorAll(selector + ' .input');
    }
}

// basic form markup
export const form = `
        <li class="form-element flex"> 
            <div class="input-container flex"> 
                <label for="first-name">Ime</label>
                <input type="text" name="first-name" id="first-name" class="input input--first-name" size="30"  maxlength="15" required>
            </div>
            <div class="input-container flex">
                <label for="last-name">Prezime</label>
                <input type="text" name="last-name" id="last-name" class="input input--last-name" size="30"  maxlength="15" required>
            </div>
        </li>
        <li class="form-element flex">
            <div class="input-container flex">
                <label for="e-mail">E-mail</label>
                <input type="text" name="e-mail" id="e-mail" class="input input--email" size="30"  maxlength="25" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="primjer@gmail.com" required>
                    </div>
        </li>
        <li class="form-element flex">
            <div class="input-container flex">
                <label for="phone">Telefon</label>
                <div class="input-container--phone flex">
                    <select name="phone" id="phone" class="input input--phone-prefix" required>
                        <option value="" hidden selected disabled></option>
                        <option value="091">091</option>
                        <option value="092">092</option>
                        <option value="095">095</option>
                        <option value="097">097</option>
                        <option value="098">098</option>
                        <option value="099">099</option>
                    </select>
                    <input type="text" name="phone-num" id="phone-num" class="input input--phone-num" size="21"  maxlength="7" required>
                </div>
            </div>                  
        </li>
        <li class="form-element flex">
            <div class="input-container flex">
                <label for="address">Adresa</label>
                <div class="input-container--address flex">
                    <input type="text" name="address" id="address" placeholder="Ulica i ku??ni broj" class="input input--street" size="30"  maxlength="30" required>
                    <input type="text" name="city" id="city" placeholder="Grad"  class="input input--city" size="30"  maxlength="30" required>
                    <input type="text" name="zip-code" id="zip-code" placeholder="Po??tanski broj" class="input input--zip-code" size="10"  maxlength="30" required> 
                </div>
            </div>
        </li>
        <li class="form-element flex">
            <div class="input-container flex">
                <label for="birth-date">Datum ro??enja</label>
                <input type="date" name="birth-date" id="birth-date" class="input input--birth-date"required>
            </div>
        </li>
`;



// toggle the hamburger menu 
export const toggleHamburger = () => {
    
    if (elements.header.classList.contains("open")) {
        elements.header.classList.remove("open");
        document.querySelectorAll(".has-fade").forEach((el) => {
            el.classList.add("fade-out");
            el.classList.remove("fade-in")
        });
    
    } else {
        elements.header.classList.add("open");
        document.querySelectorAll(".has-fade").forEach((el) => {
            el.classList.add("fade-in");
            el.classList.remove("fade-out")
        });       
    }
}



// clear UI by adding class hidden to those elements that do not have it
// class hidden applies the display: none style on the element 
export const clearUI = () => {
        elements.pages.forEach(page => {
        if (!(page.classList.contains('hidden'))) {
            page.classList.add('hidden')
        }
        if (elements.header.classList.contains('open')) {
            toggleHamburger();
        }
    });
}

// displays the success message when saving, editing or deleting a contact
export const displaySuccess = page => {
    const successMessage = document.querySelector(`.success-${page}`);
    successMessage.classList.remove('hidden');   
    successMessage.addEventListener('animationend', () => {
        successMessage.classList.add('hidden');
    })
}

// prevents the user to set the date in the future
export const maxDate = () => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
        if(dd<10){
            dd='0'+dd
        } 
        if(mm<10){
            mm='0'+mm
        } 

    today = yyyy+'-'+mm+'-'+dd;
    document.querySelector("[type='date']").setAttribute("max", today);
}

// asign contact data to input fields 
export const asignValues = (inputFields, contact) => {
    const values = [contact.firstName, contact.lastName, contact.email, contact.phonePrefix, contact.phoneNum, contact.street, contact.city, contact.zip, contact.birthDate];
    let i = 0;
    inputFields.forEach(input => {
        input.value = values[i];
        i++;
    })
}