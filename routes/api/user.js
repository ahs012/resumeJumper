const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:name"
router
  .route("/:name")
  .get(userController.findByName)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
