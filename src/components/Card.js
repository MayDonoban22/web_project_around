export default class Card {
  constructor(
    data,
    handleCardClick,
    templateSelector,
    handleLikeCard,
    handleDislikeCard,
    handleDeleteCard,
    userId
  ) {
    this._title = data.name;
    this._image = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner;
    this._handleCardClick = handleCardClick;
    this.templateSelector = templateSelector;
    this._handleLikeCard = handleLikeCard;
    this._handleDislikeCard = handleDislikeCard;
    this._handleDeleteCard = handleDeleteCard;
    this._userId = userId;
  }
  #getTemplate() {
    console.log(this.templateSelector.content);
    return this.templateSelector.content

      .querySelector(".content__element")

      .cloneNode(true);
  }
  #likeCard() {
    this.likeIcon.classList.add("content__description-like-focus");
    this._handleLikeCard(this._id).then((response) => {
      this._likes = response.likes;
      const likeCounter = this.cardElement.querySelector(
        ".content__like-number"
      );
      likeCounter.textContent = this._likes.length;
    });
  }
  #dislikeCard() {
    this._handleDislikeCard(this._id).then((response) => {
      this._likes = response.likes;
      const likeCounter = this.cardElement.querySelector(
        ".content__like-number"
      );
      likeCounter.textContent = this._likes.length;
    });
    this.likeIcon.classList.remove("content__description-like-focus");
  }
  removeCard() {
    this.cardElement.remove();
  }

  #setEventListeners() {
    this.trashIcon.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this.likeIcon.addEventListener("click", () => {
      if (this._likes.find((item) => item._id === this._userId)) {
        this.#dislikeCard();
      } else {
        this.#likeCard();
      }
    });
    this.cardImage.addEventListener("click", () => {
      this._handleCardClick(this._title, this._image);
    });
  }
  #setProperties() {
    this.cardElement = this.#getTemplate();
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
    this.cardElement.id = `id-${this._id}`;

    const likeCounter = this.cardElement.querySelector(".content__like-number");
    likeCounter.textContent = this._likes.length;
    console.log(this._likes, this._owner);

    if (this._likes.find((item) => item._id === this._userId)) {
      this.cardElement
        .querySelector(".content__description-like")
        .classList.add("content__description-like-focus");
    } else {
      this.cardElement
        .querySelector(".content__description-like")
        .classList.remove("content__description-like-focus");
    }
  }

  createCard() {
    this.#setProperties();
    this.#setEventListeners();
    return this.cardElement;
  }
}
