const tabs = document.querySelector('div#tabs');

const nav = () => {
  const navbar = document.createElement('nav');
  navbar.id = 'navbar';
  const home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';
  home.classList = 'tab';
  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.classList = 'tab';
  menu.id = 'menu';
  const contact = document.createElement('button');
  contact.innerHTML = 'Contact Us';
  contact.classList = 'tab';
  contact.id = 'contact';
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  tabs.appendChild(navbar);

  return navbar;
};


export default nav;