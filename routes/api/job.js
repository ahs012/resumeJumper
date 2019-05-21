const router = require("express").Router();
const jobController = require("../../controllers/jobController");

// Matches with "/api/job"
router.route("/job")
  .get(jobController.get)
  .post(jobController.create);

// Matches with "/api/job/:name"
router
  .route("/job/:resId")
  .get(jobController.getJobByResume)
  .put(jobController.update)
  .delete(jobController.remove);

module.exports = router;
