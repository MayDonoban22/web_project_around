export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
    this.closeButton = this.popupElement.querySelector(".popup__close");
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  open() {
    this.popupElement.classList.add("popup_show");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this.popupElement.classList.remove("popup_show");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }
  _handleClickClose(evt) {
    return evt.target.classList.contains("popup__overlay");
  }
  setEventListeners() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
    this.popupElement.addEventListener("click", (evt) => {
      if (this._handleClickClose(evt)) {
        this.close();
      }
    });
  }
}
