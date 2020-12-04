const container = document.querySelector('div#content');
const nav = document.createElement('nav');
const main = document.createElement('main');


const restaurant = () => {

  const list = document.createElement('ul');
  const listItem1 = document.createElement('li');
  
  const image = document.createElement('img');
  const description = document.createElement('div');
  const restoHeading = document.createElement('h1');
  const restoAbout = document.createElement('p');

  restoHeading.textContent = `It's that tasty!!!`;
  restoAbout.textContent = `We create a special atmosphere with our charm and humor. And the food is some of the best you can find anywhere! We specialize in local seasonal specialties but with chef innovations.`;

  description.classList = 'description'

  image.src = './restaurant.jpg';
  nav.textContent = 'I am a nav';
  
  description.appendChild(restoHeading)
  description.appendChild(restoAbout)
  main.appendChild(image)
  main.appendChild(description)
  return {nav};
}

container.appendChild(nav);
container.appendChild(main);


export default restaurant