const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const studentsRouter = require("./routes/students");
const hogwartsRouter = require("./routes/hogwarts");
const freshkartRouter = require("./routes/freshkart");
const AppError = require("./utils/appError");
const errorHandler = require("./utils/errorHandler");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(cors({
  origin: '*'
}));

app.use("/students", studentsRouter);
app.use("/hogwarts", hogwartsRouter);
app.use("/freshkart", freshkartRouter);

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.all("*", (req, res, next) => {
  next(new AppError(`The URL ${req.originalUrl} does not exists`, 404));
});
app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});

module.exports = app;
