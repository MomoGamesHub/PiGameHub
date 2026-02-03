const Auth = {
  showLogin() {
    UI.showModal("loginModal");
  },

  piLogin() {
    Pi.init({ version: "2.0" });

    Pi.authenticate([], auth => {
      let user = Storage.getUser();

      if (!user) {
        user = {
          username: auth.user.username,
          uid: auth.user.uid,
          points: 100,
          history: []
        };
      }

      Storage.saveUser(user);
      UI.updateUserUI(user);
      UI.closeModals();
    });
  },

  logout() {
    localStorage.removeItem("piUser");
    location.reload();
  }
};
