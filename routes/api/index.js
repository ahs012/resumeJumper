const router = require("express").Router();
const userRoutes = require("./user");
const resumeRoutes = require("./resume");
const jobRoutes = require('./job');
// user routes
router.use("/user", userRoutes);
router.use("/resume", resumeRoutes);
router.use('/job', (req, res, next) => {
    console.log('/api/job route hit');
    next();
},
jobRoutes);

module.exports = router;

