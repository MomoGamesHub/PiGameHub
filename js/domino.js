const Domino = {
  open() {
    if (!Storage.isLogged()) {
      Auth.showLogin();
      return;
    }

    alert("لعبة Domino ستبدأ قريبًا!");
  }
};
