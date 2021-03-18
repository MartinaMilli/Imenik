import {elements} from './base';

// display the My contacts  page
export const displayMyContactsPage = () => {
    if (elements.myContactsPage.classList.contains('hidden')) {
        elements.myContactsPage.classList.remove('hidden');
    }
}


const renderContact = contact => {
    const markup = `
        <li class="list-element flex" data-itemid=${contact.id}>
            <div class="name-col">${contact.firstName} ${contact.lastName}</div>
            <div class="email-col hide-for-mobile">${contact.email}</div>
            <div class="details-col"><a href="#">Više...</a></div>
            <div class="icons-col flex">
                <a href="#"><img src="./Images/icon-edit.svg" alt="Edit contact"></a>
                <a href="#"><img src="./Images/icon-delete.svg" alt="Delete contact"></a>
            </div>
        </li>`;
        elements.myContactsTable.insertAdjacentHTML('beforeend', markup);
}


// type: 'prev' or 'next'
const createButton = (page, type) => `

<a href="#" class=" results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>Stranica ${type === 'prev' ? page - 1 : page + 1}</a>
`;




const renderPagination = (page, numResults, resPerPage) => {
    const pages = Math.ceil(numResults / resPerPage);

    let button;
    if (page === 1 && pages > 1) {
        // Only button to go to next page
        button = createButton(page, 'next');
    } else if (page < pages) {
        // Both buttons
        button = `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `;
    } else if (page === pages && pages > 1) {
        // Only button to go to prev page
        button = createButton(page, 'prev');
    }

    elements.pagination.insertAdjacentHTML('afterbegin', button);
};



export const renderTable = (contacts, page = 1, resPerPage = 7) => {
    elements.myContactsTable.innerHTML = '';
    
    if (page === 1) {
        elements.pagination.style.flexDirection = "row-reverse"
    } else {
        elements.pagination.style.flexDirection = "row"
    }


    // render results of current page
    const start = (page - 1) * resPerPage;
    const end = page * resPerPage;

    contacts.slice(start, end).forEach(renderContact);
    
    // render pagination btns
    renderPagination(page, contacts.length, resPerPage);
}