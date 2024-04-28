const express = require("express");
const app = express();

let numberOfRequestsForUser = {};

function rateLimiter(req, res, next) {
  userId = req.headers["user-id"];

  if (!(userId in numberOfRequestsForUser)) {
    numberOfRequestsForUser[userId] = 1;
  } else {
    numberOfRequestsForUser[userId]++;
    console.log(numberOfRequestsForUser);
  }

  if (numberOfRequestsForUser[userId] > 5) {
    res.status(404).send("You have execeeded the number of requests");
  } else {
    next();
  }
}

app.use(rateLimiter);

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

app.get("/user", function (req, res) {
  //throw error("error is thrown");
  res.status(200).json({ name: "Soham Nimbalkar" });
});

app.post("/user", function (req, res) {
  res.status(200).json({ msg: "created dummy user" });
});

app.listen(3000);

//global error handling middleware
app.use(function (err, req, res, next) {
  res.json({
    msg: "something went wrong",
  });
});

app.listen(4000);
