const router = require("express").Router();
const booksController = require("../../controllers/booksController");

//  api/books
router.route("/")
  .get(booksController.findAll)
  .post(booksController.save);

// get id
router.route("/:id")
  .get(booksController.findOne)
  .delete(booksController.remove);

module.exports = router;