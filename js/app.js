// Login / Settings
document.getElementById("loginBtn").addEventListener("click", () => {
  alert("تسجيل الدخول سيتم ربطه لاحقًا بـ Pi SDK");
});

document.getElementById("settingsBtn").addEventListener("click", () => {
  alert("فتح إعدادات المنصة");
});

// Game icons
document.querySelectorAll(".game-icon").forEach(btn => {
  btn.addEventListener("click", () => {
    const game = btn.getAttribute("data-game");
    alert("فتح لعبة: " + game);
  });
});
