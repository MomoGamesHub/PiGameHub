const UI = {
  showModal(id) {
    const modal = document.getElementById(id);
    modal.classList.add("show");
  },

  closeModals() {
    document.querySelectorAll(".modal").forEach(m => m.classList.remove("show"));
  },

  updateUserUI(user) {
    document.getElementById("usernameDisplay").innerText =
      "مرحباً: " + user.username;

    document.getElementById("loginBtn").style.display = "none";
    document.getElementById("logoutBtn").style.display = "inline-block";
  },

  showProfile() {
    let u = Storage.getUser();
    if (!u) return;

    document.getElementById("p_username").innerText = u.username;
    document.getElementById("p_uid").innerText = u.uid;
    document.getElementById("p_points").innerText = u.points;

    let h = document.getElementById("gameHistory");
    h.innerHTML = "";

    u.history.forEach(i => {
      let li = document.createElement("li");
      li.innerText = i;
      h.appendChild(li);
    });

    this.showModal("profileModal");
  }
};
