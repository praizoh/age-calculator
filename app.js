const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const compression = require("compression");
const helmet = require("helmet");
const logger = require("morgan");
const routes = require("./routes/index");

const app = express();

//Middlewares
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(compression());
app.use(helmet());


//Routes
app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  return res.status(404)
  .send({message:`This endpoint ${req.originalUrl} does not exist on this server!`})
});


module.exports = app;