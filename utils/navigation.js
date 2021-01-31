import { ref } from "./refs.js";
export const navigation = (links) => {
  const markUp = links.reduce((acc, link) => {
    acc += `<li data-link=${link.value}>${link.name}</li>`;
    return acc;
  }, "");
  ref.navigationList.innerHTML = markUp;
};

// navigationLink: ["Actions", "RPG", "Strategy", "NewProduct"],
