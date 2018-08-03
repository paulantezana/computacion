import './base.scss';
import './grid';
const toggleMenu = ()=>{
    let menu = document.getElementById('main-menu');
    let toggle = document.getElementById('main-menu-toggle');
    
    toggle.addEventListener('click',()=>{
        menu.classList.toggle('main-menu--show');
    });
};
toggleMenu();


// Massory layout
const MassoryLayout = (container, items, columns) => {
    container.classList.add('masonry-layout');
    let cols = [];
    for (let i =  0; i < columns; i++){
        
    }
}


// const getDistanceTop = element => {
//     return element.getBoundingClientRect().top + window.pageYOffset;
// };


// const header = document.getElementById('header-sticky');
// let headerDistanceTop;
// if (header) headerDistanceTop = getDistanceTop(header);


// window.addEventListener('scroll', () => {
//     let windowScroll = window.pageYOffset;
//     if ( windowScroll > headerDistanceTop) {
//         header.classList.add('sticky')
//     } else {
//         header.classList.remove('sticky')
//     }
// });


// const aside = document.getElementById('aside-sticky');
// let asideDistanceTop, asideWidth;
// if (aside) {
//     asideDistanceTop = getDistanceTop(aside);
//     asideWidth = aside.getBoundingClientRect().width;
// }


// window.addEventListener('scroll', () => {
//     let windowScroll = window.pageYOffset;
//     if(aside){
//         if ( windowScroll > asideDistanceTop) {
//             aside.classList.add('sticky');
//             aside.style.width = `${asideWidth}px`;
//             aside.style.top = `${header.getBoundingClientRect().height + 16}px`
//         } else {
//             aside.classList.remove('sticky');
//         }
//     }
// });



const getRemainTime = deadline => {
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        second = ('0' + Math.floor(remainTime % 60)).slice(-2),
        minute = ('0' + Math.floor(remainTime  / 60 % 60)).slice(-2),
        hours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        days = Math.floor(remainTime / (3600 * 24));
    return {
        remainTime,
        second,
        minute,
        hours,
        days
    }
}

const countDown = (deadline, elem,  finalMessage) => {
    let el = document.getElementById(elem);
    if (el){
        let et = document.createElement("span");
        et.setAttribute("class","news-timer");
        el.appendChild(et);

        const timerUpdate = setInterval(()=>{
            let t = getRemainTime(deadline);
            et.innerHTML = ` ${t.days}d:${t.hours}h:${t.minute}m:${t.second}s`;
            if (t.remainTime <= 1){
                clearInterval(timerUpdate);
                et.innerHTML = finalMessage;
            }
        },1000)
    }
}

countDown("Aug 06 2018 17:11:47 GMT-0500","news-message","Llego la hora de la verdad");