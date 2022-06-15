/* TODO: Functions start */

function show(element, classToShowElement) {
    element.classList.toggle(classToShowElement);
}

function hide(element, classToBeRemoved) {
    element.classList.remove(classToBeRemoved);
}

/* FIXME: Functions end */

/* TODO: Header starts */

const headerNavBar = document.querySelector(".header__nav__bar__container");
const showHideHeaderNavBar = document.querySelector(".header .fa-bars");
const classToShowElement = "active";
const headerNavBarItems = document.querySelectorAll(".header__nav__bar__item");


showHideHeaderNavBar.addEventListener("click", e => {
    show(headerNavBar, classToShowElement);
});

headerNavBarItems.forEach(item => {
    item.addEventListener("click", e => {
        hide(headerNavBar, classToShowElement);
    });
})

/* FIXME: Header ends */



