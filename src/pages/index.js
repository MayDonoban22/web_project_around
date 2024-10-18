import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import {
  form,
  formPlace,
  profileName,
  profileAbout,
  profileAvatar,
  settings,
} from "../components/utils.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import "./index.css";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const userProfile = new UserInfo(profileName, profileAbout, profileAvatar);
const api = new Api("https://around.nomoreparties.co/v1/web-es-cohort-16/", {
  authorization: "58c8565b-3277-481a-9668-647f085b663c",
  "Content-Type": "application/json",
});

api.getUsers().then((data) => {
  userProfile.setUserInfo(data.name, data.about, data.avatar);
});

api.getCards().then((data) => {
  const sectionCard = new Section(
    {
      renderer: (item) => {
        const card = new Card(
          item,
          () => popupShowImage.open(item.name, item.link),
          templateSelector,
          () => {
            return api.likesCard(item._id);
          },
          () => {
            return api.deleteLike(item._id);
          },
          () => {
            popupDeleteCard.open();
            popupDeleteCard.setAction(() => {
              api.deleteCard(item._id).then(() => {
                card.removeCard();
                popupDeleteCard.close();
              });
            });
          },
          "8f9763feed63dc78a176f2fe"
        );
        sectionCard.addItem(card.createCard());
      },

      items: data,
    },
    ".content__elements"
  );
  sectionCard.render();
  const popupAddCard = new PopupWithForm("#popup-place", (inputValues) => {
    api.createCard(inputValues.title, inputValues.link).then((data) => {
      const card = new Card(
        { name: data.name, link: data.link, ...data },
        () => {
          popupShowImage.open(data.name, data.link);
        },
        templateSelector,
        () => {
          return api.likesCard(data._id);
        },
        () => {
          return api.deleteLike(data._id);
        },
        () => {
          popupDeleteCard.open();
          popupDeleteCard.setAction(() => {
            api.deleteCard(data._id).then(() => {
              card.removeCard();
              popupDeleteCard.close();
            });
          });
        },
        "8f9763feed63dc78a176f2fe"
      );

      sectionCard.addFirst(card.createCard());
    });
  });
  popupAddCard.setEventListeners();
  plusButton.addEventListener("click", () => popupAddCard.open());
});

const templateSelector = document.querySelector("template");
const editButton = document.querySelector(".content__edit-button");
const plusButton = document.querySelector(".content__plus-button");
const avatarButton = document.querySelector(".content__image-overlay");
const popupProfile = new PopupWithForm("#popup-profile", (inputValues) => {
  api.editUser(inputValues.name, inputValues.about).then((data) => {
    userProfile.setUserInfo(data.name, data.about, data.avatar);
  });
});

const popupDeleteCard = new PopupWithConfirmation("#delete-card");
popupDeleteCard.setEventListeners();

const popupImageProfile = new PopupWithForm("#edit-avatar", (inputValues) => {
  api.editAvatar(inputValues).then((data) => {
    userProfile.setUserAvatar(data.avatar);
  });
});

const popupShowImage = new PopupWithImage("#popup-image");

popupProfile.setEventListeners();

popupShowImage.setEventListeners();

popupImageProfile.setEventListeners();
editButton.addEventListener("click", () => popupProfile.open());
avatarButton.addEventListener("click", () => popupImageProfile.open());

const validationProfile = new FormValidator(form, settings);
validationProfile.enableValidation();

const validationFormPlace = new FormValidator(formPlace, settings);
validationFormPlace.enableValidation();
