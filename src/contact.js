const container = document.querySelector('div#content');
const con = document.createElement('div');


const contact = () => {
  container.innerHTML = '';
  const location = document.createElement('p');

  location.textContent = 'Contact Us. Your African food catering orders can be fulfilled for events at or from the following California cities: Aliso Viejo, Anaheim, Beverly Hills, Berkeley, Boulder creek, Watsonville, Brea, Corona Del Mar, Corte';

  con.appendChild(location);
  container.appendChild(con);
};

export default contact;
