const express = require("express");
const app = express();


//req to get information from the front-end
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3001, () => {
  console.log("Running on port 3001");
});
