<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>PiGameHub - Domino Games</title>

  <!-- Pi SDK -->
  <script src="https://sdk.minepi.com/pi-sdk.js"></script>
<script>
  Pi.init({ version: "2.0", sandbox: true });

  function loginPi() {
    Pi.authenticate(["username"])
      .then(function(auth) {
        document.getElementById("piUser").innerText =
          "مرحبًا " + auth.user.username + " 👋";
      })
      .catch(function(error) {
        alert("لم يتم تسجيل الدخول");
        console.log(error);
      });
  }
</script>
  <script>
    Pi.init({ version: "2.0", sandbox: true });

    function loginPi() {
      Pi.authenticate(
        ["username"],
        function(auth) {
          document.getElementById("piUser").innerText =
            "مرحبًا " + auth.user.username + " 👋";
        },
        function(error) {
          alert("فشل تسجيل الدخول");
        }
      );
    }
  </script>

  <style>
    body {
      font-family: Arial, sans-serif;
      direction: rtl;
      text-align: center;
      padding: 20px;
    }
    button {
      margin: 10px;
      padding: 12px 20px;
      font-size: 16px;
      cursor: pointer;
    }
    #gameContainer {
      margin-top: 20px;
      padding: 20px;
      border: 1px solid #ccc;
      min-height: 200px;
    }
  </style>
</head>

<body>

<h1>🎮 PiGameHub</h1>

<button onclick="loginPi()">تسجيل الدخول بـ Pi</button>
<p id="piUser"></p>

<hr>

<h3>ألعاب الدومينو</h3>

<button onclick="playNormalDomino()">الدومينو العادية</button>
<button onclick="playAmericanDomino()">الدومينو الأمريكية</button>
<button onclick="playFastDomino()">الدومينو السريعة</button>

<div id="gameContainer">
  <p>اختر لعبة للبدء</p>
</div>

<script>
function playNormalDomino() {
  game("الدومينو العادية");
}

function playAmericanDomino() {
  game("الدومينو الأمريكية");
}

function playFastDomino() {
  game("الدومينو السريعة");
}

function game(name) {
  document.getElementById("gameContainer").innerHTML = `
    <h2>${name}</h2>
    <p>اللعبة تعمل (Testnet)</p>
    <button onclick="alert('حركة دومينو!')">العب حركة</button>
  `;
}
</script>

</body>
</html>
