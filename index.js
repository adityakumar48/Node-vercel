const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

app.set("trust proxy", true);
app.use(cors());

app.get("/api", async (req, res) => {
  const ip = req.ip;
  res.send(ip);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
