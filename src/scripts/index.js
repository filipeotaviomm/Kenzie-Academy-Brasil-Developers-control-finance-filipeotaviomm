import { insertedValues } from "./valuesData.js";
import { storeUserData } from "./form.js";
import { render, filterButtons } from "./render.js";

export const sumArrayAll = (array) => {
  const displayResultAll = document.querySelector(".nav__display > span");

  let result = 0;

  array.forEach((element) => {
    result = result + element.value;
    displayResultAll.innerText = `R$${result}`;
  });

  result = 0;
};

const handleButtonAll = (array) => {
  const buttonAll = document.querySelector("#nav__button-all");
  const buttonIncome = document.querySelector("#nav__button-incomes");
  const buttonWithdraw = document.querySelector("#nav__button-withdraw");
  const displayResultAll = document.querySelector(".nav__display > span");

  let result = 0;

  buttonAll.addEventListener("click", () => {
    buttonAll.classList.add("nav__buttons-click");
    buttonIncome.classList.remove("nav__buttons-click");
    buttonWithdraw.classList.remove("nav__buttons-click");

    array.forEach((element) => {
      result = result + element.value;
      displayResultAll.innerText = `R$${result}`;
    });
    result = 0;
    render(array);
  });
};

const handleButtonIncome = (array) => {
  const buttonAll = document.querySelector("#nav__button-all");
  const buttonIncome = document.querySelector("#nav__button-incomes");
  const buttonWithdraw = document.querySelector("#nav__button-withdraw");
  const displayResultIncome = document.querySelector(".nav__display > span");

  let result = 0;

  buttonIncome.addEventListener("click", () => {
    buttonAll.classList.remove("nav__buttons-click");
    buttonIncome.classList.add("nav__buttons-click");
    buttonWithdraw.classList.remove("nav__buttons-click");

    displayResultIncome.innerText = "";
    array.forEach((element) => {
      if (element.categoryID == 0) {
        result = result + element.value;
        displayResultIncome.innerText = `R$${result}`;
      }
    });
    result = 0;

    const arrayIncome = filterButtons(array, buttonIncome.value);
    render(arrayIncome);
  });
};

const handleButtonWithdraw = (array) => {
  const buttonAll = document.querySelector("#nav__button-all");
  const buttonIncome = document.querySelector("#nav__button-incomes");
  const buttonWithdraw = document.querySelector("#nav__button-withdraw");
  const displayResultWithdraw = document.querySelector(".nav__display > span");

  let result = 0;

  buttonWithdraw.addEventListener("click", () => {
    buttonAll.classList.remove("nav__buttons-click");
    buttonIncome.classList.remove("nav__buttons-click");
    buttonWithdraw.classList.add("nav__buttons-click");

    displayResultWithdraw.innerText = "";
    array.forEach((element) => {
      if (element.categoryID == 1) {
        result = result + element.value;
        displayResultWithdraw.innerText = `R$${result}`;
      }
    });
    result = 0;
    const arrayWithdraw = filterButtons(array, buttonWithdraw.value);
    render(arrayWithdraw);
  });
};

//__________________________________________________________________________-

const handleModal = () => {
  const buttonHeader = document.querySelector(".header__button");
  const modalController = document.querySelector(".modalController");

  buttonHeader.addEventListener("click", () => {
    modalController.showModal();

    closeModal();
  });
};

const closeModal = () => {
  const buttonClose = document.querySelector(".align__h2-button > button");
  const buttonCancel = document.querySelector(".modal__button1-inner");
  const modalController = document.querySelector(".modalController");

  buttonClose.addEventListener("click", (e) => {
    e.preventDefault();
    modalController.close();
  });

  buttonCancel.addEventListener("click", (e) => {
    e.preventDefault();
    modalController.close();
  });
};

handleModal();

//____________________________________________________________

export const removeCard = (array) => {
  const imgTrash = document.querySelectorAll(".card__align-p-img > img");

  imgTrash.forEach((element) => {
    element.addEventListener("click", (e) => {
      const clicked = Number(e.target.id);

      const index = array.findIndex((object) => {
        return object.id == clicked;
      });

      const removedItem = array.splice(index, 1);
      render(array);
      sumArrayAll(array);
    });
  });
};

render(insertedValues);
handleButtonAll(insertedValues);
handleButtonIncome(insertedValues);
handleButtonWithdraw(insertedValues);
sumArrayAll(insertedValues);
handleModal();
storeUserData(insertedValues);
