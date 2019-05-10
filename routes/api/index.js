const router = require("express").Router();
const userRoutes = require("./user");
const resumeRoutes = require("./resume");
// user routes
router.use("/user", userRoutes);
router.use("/resume", resumeRoutes)

module.exports = router;
