const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const axios = require("axios");

app.get("/", async (req, res) => {
  try {
    const resData = await axios.get("https://api.ipify.org/?format=json");
    console.log(resData.data.ip);
  } catch (err) {
    console.log(err);
  }

  res.send("<h1>Hello World</h1>");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
