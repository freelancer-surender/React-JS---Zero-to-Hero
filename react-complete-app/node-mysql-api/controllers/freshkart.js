const AppError = require("../utils/appError");
const conn = require("../services/db");

exports.login = (req, res, next) => {
  conn.query(
    "SELECT * FROM freshkart.login WHERE uname = ? and pword = ?",
    [req.body.uname, req.body.pword],
    function (err, data, fields) {
      if (err) return next(new AppError(err, 500));
      if (data?.length > 0) {
        res.status(200).json({
          status: "success",
        });
      } else {
        res.status(401).json({
          status: "error",
        });
      }
    }
  );
};

exports.getAllItems = (req, res, next) => {
  conn.query(
    "SELECT * FROM freshkart.products",
    [req.params.type],
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

// exports.getAllPopularItems = (req, res, next) => {
//   conn.query(
//     "SELECT * FROM freshkart.products WHERE type = ? and popular = ?",
//     [req.params.type, req.params.popular],
//     function (err, data, fields) {
//       if (err) return next(new AppError(err, 500));
//       res.status(200).json({
//         status: "success",
//         length: data?.length,
//         data: data,
//       });
//     }
//   );
// };
