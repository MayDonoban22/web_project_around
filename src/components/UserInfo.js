export default class UserInfo {
  constructor(userName, userAbout) {
    this.userName = userName;
    this.userAbout = userAbout;
  }
  getUserInfo() {
    return {
      name: this.userName.textContent,
      about: this.userAbout.textContent,
    };
  }
  setUserInfo(name, about) {
    this.userName.textContent = name;
    this.userAbout.textContent = about;
  }
}
