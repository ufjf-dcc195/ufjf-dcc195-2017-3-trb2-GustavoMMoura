module.exports = function (app) {
  var velha = require("../controllers/velha.controllers");
  app.use("/velha.html", velha.velhaEJS);
}