<!DOCTYPE html>
<html lang="ar">
<head>
  <meta charset="UTF-8">
  <title>PiGameHub - ألعاب الدومينو</title>
  <style>
    body { font-family: Arial, sans-serif; direction: rtl; text-align: center; padding: 20px; }
    button { margin: 10px; padding: 10px 20px; font-size: 16px; cursor: pointer; }
    #gameContainer { margin-top: 20px; padding: 20px; border: 1px solid #ccc; min-height: 200px; }
  </style>
</head>
<body>

<h1>🎮 PiGameHub - ألعاب الدومينو</h1>

<ul style="list-style: none; padding: 0;">
  <li><button onclick="playNormalDomino()">الدومينو العادية</button></li>
  <li><button onclick="playAmericanDomino()">الدومينو الأمريكية</button></li>
  <li><button onclick="playFastDomino()">الدومينو السريعة</button></li>
</ul>

<div id="gameContainer">
  <p>اختر لعبة لتبدأ اللعب!</p>
</div>

<script>
function playNormalDomino() {
  const container = document.getElementById('gameContainer');
  container.innerHTML = `
    <h2>الدومينو العادية</h2>
    <p>اللعبة شغالة! (نسخة تجريبية)</p>
    <button onclick="alert('تم تحريك قطعة دومينو!')">حرك قطعة دومينو</button>
  `;
}

function playAmericanDomino() {
  const container = document.getElementById('gameContainer');
  container.innerHTML = `
    <h2>الدومينو الأمريكية</h2>
    <p>اللعبة شغالة! (نسخة تجريبية)</p>
    <button onclick="alert('تحريك قطعة دومينو أمريكية!')">حرك قطعة دومينو</button>
  `;
}

function playFastDomino() {
  const container = document.getElementById('gameContainer');
  container.innerHTML = `
    <h2>الدومينو السريعة</h2>
    <p>اللعبة شغالة! (نسخة تجريبية)</p>
    <button onclick="alert('تم تحريك قطعة دومينو سريعة!')">حرك قطعة دومينو</button>
  `;
}
</script>

</body>
</html>
