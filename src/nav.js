const nav = () => {
  const navbar = document.createElement('nav');
  const home = document.createElement('button');
  home.innerHTML = 'Home';
  home.id = 'home';
  const menu = document.createElement('button');
  menu.innerHTML = 'Menu';
  menu.id = 'menu';
  const contact = document.createElement('button');
  contact.innerHTML = 'Contact Us';
  contact.id = 'contact';
  navbar.appendChild(home);
  navbar.appendChild(menu);
  navbar.appendChild(contact);

  return navbar;
};

export default nav;