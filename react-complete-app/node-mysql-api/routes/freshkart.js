const express = require("express");
const controllers = require("../controllers/freshkart");
const router = express.Router();

router.route("/login").post(controllers.login);
router.route("/").get(controllers.getAllItems);
// router.route("/:type").get(controllers.getAllItems);
// router.route("/:type/:popular").get(controllers.getAllPopularItems);
module.exports = router;
