export default class UserInfo {
  constructor(userName, userAbout, userAvatar) {
    this.userName = userName;
    this.userAbout = userAbout;
    this.userAvatar = userAvatar;
  }
  getUserInfo() {
    return {
      name: this.userName.textContent,
      about: this.userAbout.textContent,
    };
  }
  setUserInfo(name, about, avatar) {
    this.userName.textContent = name;
    this.userAbout.textContent = about;
    this.userAvatar.src = avatar;
  }
}
