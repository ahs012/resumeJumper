const router = require("express").Router();
const resumeController = require("../../controllers/resumeController");

// Matches with "/api/resume"
router.route("/resume")
  .get(resumeController.find)
  .post(resumeController.create);

// Matches with "/api/resume/resume/:name"
router
  .route("/resume/:name")
  .get(resumeController.findByName)
  .put(resumeController.update)
  .delete(resumeController.remove);

module.exports = router;
