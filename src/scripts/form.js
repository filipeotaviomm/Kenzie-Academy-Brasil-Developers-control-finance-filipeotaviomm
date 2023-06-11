import { render } from "./render.js";
import { sumArrayAll } from "./index.js";

export const storeUserData = (array) => {
  const modalController = document.querySelector(".modalController");
  const inputNumber = document.querySelector(".modal__card-inner > input");
  const buttonRadio = document.querySelectorAll(
    ".modal__buttons > input[type='radio']"
  );
  const enterButton = document.querySelector(".modal__button2-inner");

  enterButton.addEventListener("click", (e) => {
    e.preventDefault();

    let gotId = "";

    buttonRadio.forEach((button) => {
      if (button.id == "entrada") {
        gotId = 0;
      } else if (button.id == "saída") {
        gotId = 1;
      }
    });

    console.log(inputNumber.value);
    console.log(array);
    let dados = {
      id: array[array.length - 1].id + 1,
      value: Number(inputNumber.value),
      categoryID: gotId,
    };
    array.push(dados);
    render(array);
    sumArrayAll(array);
    modalController.close();
  });
};
