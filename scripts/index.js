let popup = document.querySelector(".popup");

let editButton = document.querySelector(".content__edit-button");
let name = document.querySelector(".content__name");
let profession = document.querySelector(".content__profession");
let updateButton = document.querySelector(".popup__update");
editButton.addEventListener("click", function () {
  popup.classList.add("popup_show");

  let inputList = popup.querySelectorAll("input");
  // inputList.forEach((item) => {
  //   item.value = "May Donoban";
  // });
  inputList[0].value = name.textContent;
  inputList[1].value = profession.textContent;
});

updateButton.addEventListener("click", function (event) {
  event.preventDefault();
  let inputList = popup.querySelectorAll("input");
  name.textContent = inputList[0].value;
  profession.textContent = inputList[1].value;
  popup.classList.remove("popup_show");
});

let closeButton = document.querySelector(".popup__close");

closeButton.addEventListener("click", function () {
  popup.classList.remove("popup_show");
});

let formInput = document.querySelector(".popup__edit-profile");

function updateDetails() {}
