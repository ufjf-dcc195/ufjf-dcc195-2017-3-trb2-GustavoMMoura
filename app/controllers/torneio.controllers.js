module.exports.sorteioEJS = function (req, res, next) {
  res.render('torneio', {
    titulo: "Torneio - Times",
    mensagem: "",
    times: ""
  });
}

module.exports.inicioEJS = function (req, res, next) {
  var times = req.body.times.replace(';', '').split('\r\n');
  if (times.length != 16) {
    res.render('torneio', {
      titulo: "Torneio - Times",
      mensagem: "São necessários 16 times.",
      times: req.body.times
    });
  } else {
    var etapas = sortear16(times);
    res.render('etapas', {
      titulo: "Torneio - Times",
      etapas: etapas,
      etapasJSON: JSON.stringify(etapas)
    });
  }
}

module.exports.etapasEJS = function (req, res, next) {
  var rand = require('random-seed').create();
  var etapasJSON = req.body.etapasJSON;
  var etapas = JSON.parse(etapasJSON);

  if (!etapas.quartas.length) {
    for (let i = 0; i < etapas.oitavas.length; i += 2) {
      etapas.quartas.push(etapas.oitavas[i + rand(2)]);
    }
    
  } else if (!etapas.semi.length) {
    for (let i = 0; i < etapas.quartas.length; i += 2) {
      etapas.semi.push(etapas.quartas[i + rand(2)]);
    }
    
  } else if (!etapas.final.length) {
    for (let i = 0; i < etapas.semi.length; i += 2) {
      etapas.final.push(etapas.semi[i + rand(2)]);
    }
    
  } else {
    etapas.campeao = etapas.final[rand(2)];
  }

  res.render('etapas', {
    titulo: "Torneio - Times",
    etapas: etapas,
    etapasJSON: JSON.stringify(etapas)
  });
}

function sortear16(times) {
  var rand = require('random-seed').create();
  var etapas = { oitavas: [], quartas: [], semi: [], final: [], campeao: [] };
  while (times.length > 0) {
    etapas.oitavas.push(times.splice(rand(times.length), 1));
  }
  return etapas;
};