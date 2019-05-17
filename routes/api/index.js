const router = require("express").Router();
const userRoutes = require("./user");
const resumeRoutes = require("./resume");
const jobRoutes = require('./job');
// user routes
router.use("/user", userRoutes);
router.use("/resume", resumeRoutes);
router.use('/job', jobRoutes);

module.exports = router;

