module.exports = function(app){
  var index = require("../controllers/index.controllers");
  app.use("/sobre.html", index.sobreEJS);
  app.use("/lista.html", index.listaEJS);
  app.use("/biscoito.html", index.cookiesEJS);
  app.use("/", index.indexEJS);
};
