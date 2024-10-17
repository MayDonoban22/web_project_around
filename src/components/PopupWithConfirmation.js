import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._action = () => {};
  }

  setAction(action) {
    this._action = action;
  }

  setEventListeners() {
    super.setEventListeners();
    this.popupElement
      .querySelector(".popup__update")
      .addEventListener("click", () => {
        this._action();
      });
  }
}
