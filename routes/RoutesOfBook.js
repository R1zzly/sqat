const express = require("express");
const {
  getAllBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/ControllerOfBooks");

const router = express.Router();

router.route("/").get(getAllBooks).post(createBook);
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);

module.exports = router;
