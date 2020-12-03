
  const nav = document.createElement('nav');
  const nav1 = document.createElement('nav');
const restaurant = () => {
  nav.textContent = 'I am a nav';
  nav1.textContent = 'I am a nav1';
  return {nav, nav1};
}

const element = document.querySelector('div#content');
  element.appendChild(nav);
  element.appendChild(nav1);


export default restaurant