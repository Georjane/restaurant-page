const container = document.querySelector('div#content');
const con = document.createElement('div');

const menu = () => {
  container.innerHTML = '';

  const foodlist = document.createElement('p');
  foodlist.innerHTML = '';



  foodlist.innerHTML = "You may order it, or our prearranged individual plates from the Stews-and-Rice-Menu or the Soups-and-Fufu-Menu. We have also made it possible for you to make up your own individual plate size and content for your events by selecting any of the dishes from our Soups-Salads-and-Sides-Menu and/or the Appetizers-and-Snacks-Menu. These foods are sold per serving (see serving spoon), per weight or per piece as indicated. 25 servings is approximately 10 lbs in Bean-stew measure (see 25 servings carry-out pan).";

  con.appendChild(foodlist);
  container.appendChild(con);

}
// container.appendChild(con);

export default menu;