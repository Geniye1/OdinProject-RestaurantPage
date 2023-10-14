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

const contentContainer = document.querySelector('.content-container');
const menuTabButton = document.querySelector('menu-tab-button');
const contactTabButton = document.querySelector('contact-tab-button');
const aboutTabButton = document.querySelector('about-tab-button');

//menuTabButton.addEventListener('click', );

contentContainer.appendChild(InitPage());

