import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._form = this.popupElement.querySelector(".popup__form");
    this._handleFormSubmit = handleFormSubmit;
  }

  getInputValues() {
    let inputValues = {};
    this._form.querySelectorAll(".popup__item").forEach((input) => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._cardId || this.getInputValues());
      super.close();
    });
  }
}
