const Ludo = {
  open() {
    if (!Storage.isLogged()) {
      Auth.showLogin();
      return;
    }

    alert("لعبة Ludo ستبدأ قريبًا!");
  }
};
