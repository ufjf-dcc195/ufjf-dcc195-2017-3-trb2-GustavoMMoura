module.exports.amigoEJS = function (req, res, next) {
  res.render('amigo', {
    titulo: "Sorteio - Amigo oculto",
    mensagem: ""
  });
}

module.exports.sorteioEJS = function (req, res, next) {
  var rand = require('random-seed').create();
  var listAmigos = req.body.amigos.split("\r\n");
  var listAmigosAux = req.body.amigos.split("\r\n");
  var message;
  var listAux = [];

  if (listAmigos.length < 3) {
    res.render('amigo', {
      titulo: "Sorteio - Amigo oculto",
      mensagem: "Não há pessoas suficientes para o sorteio."
    });
  } else {
    while(listAux.length < listAmigos.length) {
      var sorteado = rand(listAmigosAux.length);
      process.stdout.write("listAmigosAux: " + listAmigosAux.length + "\n");
      process.stdout.write("Sorteado: " + sorteado + "\n");
      if (listAmigosAux[sorteado] !== listAmigos[listAux.length]) {
        listAux.push(listAmigosAux[sorteado]);
        listAmigosAux.splice(sorteado, 1);
      } else if(listAux.length === listAmigos.length - 1 && listAmigosAux[sorteado] === listAmigos[listAmigos.length - 1]) {
        listAmigosAux = listAmigos.slice(0);
        listAux = [];
      }
    }
    res.render('sorteado', {
      titulo: "Resultado do Sorteio - Amigo oculto",
      listAmigos: listAmigos,
      listAux: listAux
    });
  }
}