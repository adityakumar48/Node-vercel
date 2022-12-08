const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

app.get("/", (req, res) => {
  fetch("https://api.ipify.org/?format=json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.ip);
    });
  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
