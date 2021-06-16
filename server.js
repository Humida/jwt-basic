const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.post("/singin", (req, res, next) => {
  const user = req.body;
  var token = jwt.sign(user, "doooaaa");
  console.log(token);
  res.send(token);
});

app.get("/sing", (req, res, next) => {
  let tokenRequest = req.headers.authorization;
  let [schema, token] = tokenRequest.split(" ");
  const decoded = jwt.verify(token, "doooaaa");
  console.log(decoded);
  res.send(decoded);
});

const PORT = 4000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
