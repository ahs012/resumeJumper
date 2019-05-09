const router = require("express").Router();
const resumeController = require("../../controllers/jobController");

// Matches with "/api/job"
router.route("/job")
  .get(jobController.findByName)
  .post(jobController.create);

// Matches with "/api/job/:name"
router
  .route("/:name")
  .get(jobController.findByName)
  .put(jobController.update)
  .delete(jobController.remove);

module.exports = router;
