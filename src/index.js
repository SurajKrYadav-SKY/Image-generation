const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");

const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  const cors = require("cors");
  app.use(cors());

  app.use("/api", apiRoutes);

  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: "Something went wrong!" });
  });

  app.listen(PORT, () => {
    console.log("Server started at port:", PORT);
  });
};

setupAndStartServer();
