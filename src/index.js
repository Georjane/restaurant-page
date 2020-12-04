import home from './home';
import nav from './nav'
import menu from './menu'
import './style.css';

tabs.appendChild(nav());
home();

// // Home tab
let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  home();
};

// // Menu tab
let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {

  menu();
};