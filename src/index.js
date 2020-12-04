import home from './home';
import nav from './nav';
import menu from './menu';
import contact from './contact';
import './style.css';

const tabs = document.querySelector('div#tabs');

tabs.appendChild(nav());
home();

const homeBtn = document.getElementById('home');
const menuBtn = document.getElementById('menu');
const contactBtn = document.getElementById('contact');
homeBtn.onclick = () => {
  homeBtn.classList.add('disabledTab');
  menuBtn.classList.remove('disabledTab');
  contactBtn.classList.remove('disabledTab');
  home();
};


menuBtn.onclick = () => {
  homeBtn.classList.remove('disabledTab');
  menuBtn.classList.add('disabledTab');
  contactBtn.classList.remove('disabledTab');
  menu();
};


contactBtn.onclick = () => {
  homeBtn.classList.remove('disabledTab');
  menuBtn.classList.remove('disabledTab');
  contactBtn.classList.add('disabledTab');
  contact();
};