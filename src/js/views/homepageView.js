import {elements} from './base';

export const displayHomepage = () => {
    if (elements.homePage.classList.contains('hidden')) {
        elements.homePage.classList.remove('hidden');
    }
}