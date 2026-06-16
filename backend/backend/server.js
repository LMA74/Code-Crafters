const express = require("express");

const app = express();
const PORT = 5000;

app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "Study group finder system API is running"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
