<!DOCTYPE html>
<html lang="ar">
<head>
<meta charset="UTF-8">
<title>PiGameHub - Domino Training</title>

<style>
body {
  font-family: Arial, sans-serif;
  direction: rtl;
  text-align: center;
  background: #f5f5f5;
}

#board {
  margin: 20px auto;
  padding: 10px;
  min-height: 120px;
  border: 2px dashed #aaa;
  display: flex;
  justify-content: center;
}

.hand {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.domino {
  width: 60px;
  height: 120px;
  background: white;
  border: 2px solid #000;
  margin: 5px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
}

.half {
  flex: 1;
  border-bottom: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
}

.half:last-child {
  border-bottom: none;
}

button {
  padding: 10px 20px;
  font-size: 16px;
  margin: 10px;
}
</style>
</head>

<body>

<h1>🎴 دومينو تدريبية</h1>

<button onclick="drawDomino()">سحب قطعة</button>

<div class="hand" id="hand"></div>

<h3>لوحة اللعب</h3>
<div id="board"></div>

<script>
let hand = [];
let boardEnd = null; // آخر رقم على اللوحة

function drawDomino() {
  if (hand.length >= 7) {
    alert("وصلت
