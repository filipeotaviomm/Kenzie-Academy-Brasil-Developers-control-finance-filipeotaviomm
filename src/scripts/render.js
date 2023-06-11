import { removeCard } from "./index.js";
import { insertedValues, valuesCategory } from "./valuesData.js";

export const render = (array) => {
  const mainContainer = document.querySelector(".main__container");

  mainContainer.innerHTML = "";

  if (array.length === 0) {
    renderEmptyCard();
  }
  array.forEach((elemento) => {
    const card = createCard(elemento);
  });

  removeCard(insertedValues);
};

//________________________________________________________________

export const createCard = (data) => {
  const mainContainer = document.querySelector(".main__container");
  const divCards = document.createElement("div");
  const divCard = document.createElement("div");
  const spanR$ = document.createElement("span");
  const inputValue = document.createElement("p");
  const divCardAlign = document.createElement("div");
  const pEntrada = document.createElement("p");
  const imgTrash = document.createElement("img");

  //adds

  divCards.classList.add("cards");
  divCard.classList.add("card");
  spanR$.innerText = "R$";
  inputValue.innerText = data.value;
  inputValue.type = "number";
  divCardAlign.classList.add("card__align-p-img");
  if (data.categoryID == 0) {
    pEntrada.innerText = valuesCategory[0];
  } else if (data.categoryID == 1) {
    pEntrada.innerText = valuesCategory[1];
  }
  // data.categoryID == 0
  //   ? (pEntrada.innerText = "Entrada")
  //   : (pEntrada.innerText = "Saída");
  imgTrash.src = "./src/assets/trash.svg";
  imgTrash.id = data.id;

  //appends
  divCardAlign.append(pEntrada, imgTrash);
  divCard.append(spanR$, inputValue, divCardAlign);
  divCards.append(divCard);
  mainContainer.append(divCards);

  return mainContainer;
};

//______________________________________

const renderEmptyCard = () => {
  const mainContainer = document.querySelector(".main__container");
  mainContainer.innerHTML = "";
  const divMainCardNotFound = document.createElement("div");
  const h3Value = document.createElement("h3");
  const pRegister = document.createElement("p");
  const displayResulZero = document.querySelector(".nav__display > span");

  divMainCardNotFound.classList.add("main__card-not-found");
  h3Value.innerText = "Nenhum valor encontrado";
  pRegister.innerText = "Registrar novo valor";
  displayResulZero.innerText = "R$0";

  divMainCardNotFound.append(h3Value, pRegister);
  mainContainer.append(divMainCardNotFound);
};

export const filterButtons = (array, optionFilter) => {
  const insertedValuesFiltered = array.filter((item) => {
    if (Number(item.categoryID) === Number(optionFilter)) {
      return item;
    }
  });
  return insertedValuesFiltered;
};
