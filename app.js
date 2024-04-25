require("dotenv").config();
const express = require("express");
const app = express();
const bookRouter = require("./api/books/book.router");
app.use(express.json());
app.use("/api/books", bookRouter);

app.listen(process.env.APP_PORT, () => {
  console.log("server up and running on port:", process.env.APP_PORT);
});
