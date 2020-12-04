import home from './home';
import nav from './nav'
import menu from './menu'
import contact from './contact'
import './style.css';

tabs.appendChild(nav());
home();

const container = document.querySelector('div#content');
const wipe = () => {
  container.innerHTML = '';
}
// // Home tab
let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  home();
};

// Menu tab
let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {

  menu();
};

// contact tab
let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  wipe();
  contact();
};