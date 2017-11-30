module.exports = function (app) {
  var torneio = require("../controllers/torneio.controllers");
  app.route("/torneio.html")
    .get(torneio.sorteioEJS)
    .post(torneio.inicioEJS);
  app.use("/etapas.html", torneio.etapasEJS);
}
