const Storage = {
  getUser() {
    return JSON.parse(localStorage.getItem("piUser"));
  },

  saveUser(user) {
    localStorage.setItem("piUser", JSON.stringify(user));
  },

  isLogged() {
    return !!localStorage.getItem("piUser");
  }
};
