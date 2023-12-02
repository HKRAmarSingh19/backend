require('dotenv').config()

const express = require("express");
const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("hello Shivi Baby love you ");
});

app.get("/hkr", (req, res) => {
  res.send("I love You Shivi");
});

app.get('/shivi', (req, res ) =>{
    res.send("You ARe My LOve ;");
});

app.listen(process.env.PORT, () => {
  console.log(`App is listenning on  ${port}`);
});
