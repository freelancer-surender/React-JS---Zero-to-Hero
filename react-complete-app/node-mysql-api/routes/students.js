const express = require("express");
const controllers = require("../controllers/students");
const router = express.Router();

router
  .route("/")
  .get(controllers.getAllStudents)
  .post(controllers.createStudent);
router
  .route("/:id")
  .get(controllers.getStudent)
  .put(controllers.updateStudent)
  .delete(controllers.deleteStudent);
module.exports = router;
