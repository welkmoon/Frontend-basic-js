const data = [
    {
        name: 'mage-1',
        alt: 'sdfsdf',
    },
    {
        name: 'mage-12',
        alt: 'sdfsdf',
    },
    {
        name: 'mage-13',
        alt: 'sdfsdf',
    },
    {
        name: 'mage-14'
    },
    {
        name: 'mage-15'
    },
    {
        name: 'mage-16'
    },
    {
        name: 'mage-17'
    },
    {
        name: 'mage-18'
    },
    {
        name: 'mage-19'
    },
    {
        name: 'mage-10'
    },
    {
        name: 'mage-11'
    },
    {
        name: 'mage-12'
    }
];

const imgHtml = data.map((el, index) => `
<img data-alt="${el.alt}" src="./graphic_design/graphic-design${index + 1}.jpg" alt="${el.name}">
`)

const container = document.querySelector('.container');
container.insertAdjacentHTML('beforeend', [...imgHtml].splice(0, 6).join(''));

const btn = document.querySelector('button');
btn.onclick = () => {
    container.insertAdjacentHTML('beforeend', [...imgHtml].splice(6, 12).join(''));
}

//TODO: Optimize this code!!