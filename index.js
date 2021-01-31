import data from "./data/index.js";
import { navigation } from "./utils/navigation.js";
import { ref } from "./utils/refs.js";
import { createCards } from "./utils/createCards.js";

// console.log(data);
// console.log(navigation(data.navigationLink));

navigation(data.navigationLink);
createCards(data.games.actions);

const createMarkUp = (event) => {
  const name = event.target.dataset.link;
  createCards(data.games[name]);
};
const findGame = (event) => {
  console.log(event.target);
  const game = data.games[event.target.dataset.category].find(
    (game) => game.id == event.target.dataset.id
  );
  console.log(game);
};
ref.navigationList.addEventListener("click", createMarkUp);

ref.cardList.addEventListener("click", findGame);
