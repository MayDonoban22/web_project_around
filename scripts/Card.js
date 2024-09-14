export default class Card {
  constructor(title, image, handleCardClick) {
    this._title = title;
    this._image = image;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    return document
      .querySelector("template")
      .content.querySelector(".content__element")
      .cloneNode(true);
  }
  likeCard() {
    this.likeIcon.classList.toggle("content__description-like-focus");
  }
  removeCard() {
    this.cardElement.remove();
  }

  setEventListeners() {
    this.trashIcon.addEventListener("click", () => {
      this.removeCard();
    });
    this.likeIcon.addEventListener("click", () => {
      this.likeCard();
    });
    this.cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._image);
    });
  }
  setProperties() {
    this.cardElement = this._getTemplate();
    this.cardImage = this.cardElement.querySelector(
      ".content__element-picture"
    );
    this.cardImage.src = this._image;
    this.cardTitle = this.cardElement.querySelector(
      ".content__description-text"
    );
    this.cardTitle.textContent = this._title;
    this.trashIcon = this.cardElement.querySelector(".content__bin");
    this.likeIcon = this.cardElement.querySelector(
      ".content__description-like"
    );
  }

  createCard() {
    this.setProperties();
    this.setEventListeners();
    return this.cardElement;
  }
}
