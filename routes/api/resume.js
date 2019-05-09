const router = require("express").Router();
const resumeController = require("../../controllers/resumeController");

// Matches with "/api/resume"
router.route("/resume")
  .get(resumeController.findByName)
  .post(resumeController.create);

// Matches with "/api/resume/:name"
router
  .route("/:name")
  .get(resumeController.findByName)
  .put(resumeController.update)
  .delete(resumeController.remove);

module.exports = router;
