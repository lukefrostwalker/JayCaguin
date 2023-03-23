import {
    renderFooter,
    renderSkills,
    renderNav,
    renderWorks,
} from './render.js';
const currentUrl = window.location.href;
AOS.init();

renderNav();

if (
    currentUrl.indexOf('works') > -1 ||
    currentUrl.indexOf('about') > -1 ||
    currentUrl.indexOf('contact') > -1 ||
    currentUrl.indexOf('thank-you') > -1
) {
    renderFooter();
}

if (currentUrl.indexOf('works') > -1) {
    renderWorks();
} else if (currentUrl.indexOf('about') > -1) {
    renderSkills();
}

const tooltipTriggerList = document.querySelectorAll(
    '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
