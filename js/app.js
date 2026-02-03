window.onload = function() {
  let u = Storage.getUser();
  if(u) UI.updateUserUI(u);
};
