const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.getAllStudents = (req, res, next) => {
  conn.query("SELECT * FROM students", function (err, data, fields) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      status: "success",
      length: data?.length,
      data: data,
    });
  });
};

exports.createStudent = (req, res, next) => {
  if (!req.body) return next(new AppError("No form data found", 404));
  const values = [req.body.name, req.body.age, req.body.dept];
  conn.query(
    "INSERT INTO students (s_name, s_age, s_dept) VALUES(?)",
    [values],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "student added!",
      });
    }
  );
};

exports.getStudent = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No student id found", 404));
  }
  conn.query(
    "SELECT * FROM students WHERE s_id = ?",
    [req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    }
  );
};

exports.updateStudent = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No student id found", 404));
  }
  conn.query(
    "UPDATE students SET s_name = ?, s_age = ?, s_dept = ? WHERE s_id=?",
    [req.body.name, req.body.age, req.body.dept, req.params.id],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "student updated!",
      });
    }
  );
};

exports.deleteStudent = (req, res, next) => {
  if (!req.params.id) {
    return next(new AppError("No student id found", 404));
  }
  conn.query(
    "DELETE FROM students WHERE s_id=?",
    [req.params.id],
    function (err, fields) {
      if (err) return next(new AppError(err, 500));
      res.status(201).json({
        status: "success",
        message: "student deleted!",
      });
    }
  );
};
