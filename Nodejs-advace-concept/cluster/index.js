const express = require("express");
var numCPUs = require("os").cpus().length;

const cluster = require("cluster");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const doClustering = false;


if (cluster.isMaster && doClustering) {
  for (let i = 0; i < 2; i++) {
    cluster.fork();
  }

  cluster.on("death", function (worker) {
    logger.info("worker " + worker.pid + " died");
  });
} else {
  app.listen(3000, () => {
    console.log("Example app listening on port 3000!");
  });
}
