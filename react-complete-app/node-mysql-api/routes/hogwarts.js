const express = require("express");
const controllers = require("../controllers/hogwarts");
const router = express.Router();

router
  .route("/")
  .get(controllers.getAllCharacters)
module.exports = router;
