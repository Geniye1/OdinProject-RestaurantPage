import './style.css'
import './home-style.css'
import './menu-style.css'
import './contact-style.css'
import './about-style.css'
import './AndyBell_CSSModernReset.css'
import './assets/Images/bg.jpg'
import './assets/Images/restaurant-min.jpg'
import './assets/Images/toast_gravy.jpeg'
import './assets/Images/glock_n_guac.jpeg'
import './assets/Images/pizza_wid_charms.jpeg'
import './assets/Images/selfie.jpg'

import InitPage from './init';
import DisplayMenu from './menu'

const contentContainer = document.querySelector('.content-container');
const homeTabButton = document.querySelector('.title-wrapper');
const menuTabButton = document.querySelector('#menu-tab-button');
const contactTabButton = document.querySelector('#contact-tab-button');
const aboutTabButton = document.querySelector('#about-tab-button');

let displayedContent = InitPage();

homeTabButton.addEventListener('click', PopulateHome);
menuTabButton.addEventListener('click', PopulateMenu);
contactTabButton.addEventListener('click', PopulateContact);
aboutTabButton.addEventListener('click', PopulateAbout);

contentContainer.appendChild(displayedContent);

function PopulateHome() {
    displayedContent.remove();
    displayedContent = InitPage();
    contentContainer.appendChild(displayedContent);
}

function PopulateMenu() {
    displayedContent.remove();
    displayedContent = DisplayMenu();
    contentContainer.appendChild(displayedContent);
}

function PopulateContact() {

}

function PopulateAbout() {

}