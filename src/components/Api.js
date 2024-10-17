export default class Api {
  constructor(baseUrl, headers) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }
  getUsers() {
    return fetch(`${this.baseUrl}users/me`, {
      method: "GET",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }
  getCards() {
    return fetch(`${this.baseUrl}cards`, {
      method: "GET",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }
  editUser(name, about) {
    return fetch(`${this.baseUrl}users/me`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }
  createCard(name, link) {
    return fetch(`${this.baseUrl}cards`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }
  likesCard(cardId) {
    return fetch(`${this.baseUrl}cards/likes/${cardId}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(),
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }
  deleteLike(cardId) {
    return fetch(`${this.baseUrl}cards/likes/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
      body: JSON.stringify(),
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }

  deleteCard(cardId) {
    return fetch(`${this.baseUrl}cards/${cardId}`, {
      method: "DELETE",
      headers: this.headers,
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }
  editAvatar(data) {
    return fetch(`${this.baseUrl}users/me/avatar`, {
      method: "PATCH",
      headers: this.headers,
      body: JSON.stringify({
        avatar: data.avatar,
      }),
    }).then((response) => {
      if (response.ok) return response.json();
      return Promise.reject("Error en la solicitud");
    });
  }
}
