module.exports = function (app) {
  var amigo = require("../controllers/amigo.controllers");
  app.route("/amigo.html")
    .get(amigo.amigoEJS)
    .post(amigo.sorteioEJS);
}
