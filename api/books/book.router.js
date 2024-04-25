const { createBook } = require("./book.controler");

const router = require("express").Router();

router.post("/", createBook);

module.exports = router;
