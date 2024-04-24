const express = require("espress");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    success: 1,
    message: "server is up and run successfully",
  });
});

app.listen(3000, () => {
  console.log("server up and running");
});
