require('dotenv').config();
// app.js
const express = require("express");
const app = express();
const port = 8080;
const cors = require('cors');
const routes = require("./routes/"); // index.js 는 / 와 같으므로 생략 가능

app.use(cors());
app.use(express.static(__dirname + "/views"));
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(routes) // use 는 경로에 대한 확장성을 의미한다.

app.listen(port, function () {
     console.log(`http://localhost:${port}`);
})