const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/user/:name"
//Might need to change to /:email confirm with chris
// For now, email is saving to name property of params object
router
  .route("/:name")
  .get(userController.findOne)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
