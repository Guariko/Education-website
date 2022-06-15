/* TODO: Functions start */

function show(element, classToShowElement) {
    element.classList.toggle(classToShowElement);
}

function hide(element, classToBeRemoved) {
    element.classList.remove(classToBeRemoved);
}

function changeInnerHtmlBasedOnWindowWidth(element, windowWIdth, ifValue, elseValue) {
    
    if (window.innerWidth >= windowWIdth) {
        element.innerHTML = ifValue;
    }

    else {
        element.innerHTML = elseValue
    };
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

/* TODO: Home starts */

const homeH1 = document.querySelector(".home h1");
const changeHomeH1ValueIfGreaterThan = 866;
const homeH1IfValue = "<h1>Grow your skills to advance<br/>your career path</h1>";
const homeH1ElseValue = "<h1>Grow your skills<br />to advance your<br />career path</h1>";

changeInnerHtmlBasedOnWindowWidth(homeH1, changeHomeH1ValueIfGreaterThan, homeH1IfValue, homeH1ElseValue);

window.addEventListener("resize", e => {
    changeInnerHtmlBasedOnWindowWidth(homeH1, changeHomeH1ValueIfGreaterThan, homeH1IfValue, homeH1ElseValue);
});

// FIXME: Home ends //

