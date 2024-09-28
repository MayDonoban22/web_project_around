import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this.imageElement = this.popupElement.querySelector(".popup__picture-src");
    this.titleElement = this.popupElement.querySelector(
      ".popup__picture-title"
    );
  }
  open(title, link) {
    super.open();
    this.titleElement.textContent = title;
    this.imageElement.src = link;
  }
}
