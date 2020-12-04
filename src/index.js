import home from './home';
import nav from './nav'
import menu from './menu'
import contact from './contact'
import clear from './clear'
import './style.css';

tabs.appendChild(nav());
home();

let homeBtn = document.getElementById('home');
homeBtn.onclick = () => {
  homeBtn.classList.add('disabledTab')
  menuBtn.classList.remove('disabledTab')
  contactBtn.classList.remove('disabledTab')
  
};

let menuBtn = document.getElementById('menu');
menuBtn.onclick = () => {
  homeBtn.classList.remove('disabledTab')
  menuBtn.classList.add('disabledTab')
  contactBtn.classList.remove('disabledTab')
  menu();
};

let contactBtn = document.getElementById('contact');
contactBtn.onclick = () => {
  
  homeBtn.classList.remove('disabledTab')
  menuBtn.classList.remove('disabledTab')
  contactBtn.classList.add('disabledTab')
  contact();
};