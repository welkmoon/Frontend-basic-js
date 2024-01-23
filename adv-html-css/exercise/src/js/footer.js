/**
 * Add year to copyright
 */
const copyrightAddYear = () => {
    const copyrightElem = document.querySelector('#copyright');
    copyrightElem.innerText = copyrightElem.innerText + `, ${new Date().getFullYear()}`;
}

window.addEventListener('DOMContentLoaded', copyrightAddYear)

// sdofsdf
