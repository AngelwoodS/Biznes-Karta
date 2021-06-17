"use strict"

// прокрутка при клике
// const btnLinks = document.querySelectorAll('.banner-btn-link[data-goto]');
// const gotoBlock = document.querySelector(btnLink.dataset.goto);
// console.log(gotoBlock);
// if (btnLinks.length > 0) {
//     btnLinks.forEach(btnLink => {
//         btnLink.addEventListener("click", onBtnLinkClick);
//     });

//     function onBtnLinkClick(e) {
//         const btnLink = e.target;
//         if (btnLink.dataset.goto && document.querySelector(btnLink.dataset.goto)) {
            
//             // const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

//             window.scrollTo({
//                 top: gotoBlock,
//                 behavior: "smooth"
//             });
//             // e.preventDefault();
//         }
//     }
// }

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
    const menuBody = document.querySelector('.main-nav');
    iconMenu.addEventListener("click", function(e) {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    })
}