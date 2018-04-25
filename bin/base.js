import './base.scss';

const getDistanceTop = element => {
    return element.getBoundingClientRect().top + window.pageYOffset;
};


const header = document.getElementById('header-sticky');
let headerDistanceTop;
if (header) headerDistanceTop = getDistanceTop(header);

window.addEventListener('scroll', () => {
    let windowScroll = window.pageYOffset;
    if ( windowScroll > headerDistanceTop) {
        header.classList.add('sticky')
    } else {
        header.classList.remove('sticky')
    }
});


const aside = document.getElementById('aside-sticky');
let asideDistanceTop, asideWidth;
if (aside) {
    asideDistanceTop = getDistanceTop(aside);
    asideWidth = aside.getBoundingClientRect().width;
}


window.addEventListener('scroll', () => {
    let windowScroll = window.pageYOffset;
    if(aside){
        if ( windowScroll > asideDistanceTop) {
            aside.classList.add('sticky');
            aside.style.width = `${asideWidth}px`;
            aside.style.top = `${header.getBoundingClientRect().height + 16}px`
        } else {
            aside.classList.remove('sticky');
        }
    }
});
