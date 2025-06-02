// index.js (루트에 위치)
const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// public 폴더를 정적(static)으로 서빙
app.use(express.static(path.join(__dirname, 'public')));

// GET / 요청이 들어올 때 public/index.html을 렌더
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${3000}`);
});
