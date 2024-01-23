const linksInitialText = [
    'Home',
    'Blog',
    'FAQ',
    'Support',
]

const setLinkText = () => {
    const linksCollection = document.querySelectorAll('li');
    linksCollection.forEach((link, index) => {
        link.innerText = linksInitialText[index];
    });
}

window.addEventListener('DOMContentLoaded', setLinkText)
