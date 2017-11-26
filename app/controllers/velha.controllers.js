module.exports.velhaEJS = function (req, res, next) {
  var casa = req.body.casa;
  var casas = req.body.casas || new Array(9);
  var vez = req.body.vez;
  var aviso = "";
  var resultado = false;

  if (vez === undefined) {
    vez = 0;
    jogador = "Jogador 1";
  } else if (casa === "") {
    aviso = "Escolha uma casa";
    jogador = "Jogador " + (vez + 1);
  } else {
    casa = casa - 1;
    if (casas[casa] != "") {
      aviso = "Casa já escolhida";
    } else {
      casas[casa] = vez
      vez = 1 - vez;
      resultado = verificarVitoria(casas) || false;
    }
    jogador = "Jogador " + (vez + 1);
  }

  res.render('velha', {
    titulo: "Jogo da velha",
    aviso: aviso,
    jogador: jogador,
    vez: vez,
    casas: casas,
    resultado: resultado
  });
}

function verificarVitoria(casas) {

  function verificarColunas(casas) {
    for (let i = 0; i < 3; i++) {
      if (casas[i] !== "" && casas[i] === casas[i + 3] && casas[i] === casas[i + 6]) {
        return {
          vencedor: casas[i],
          casas: [i, i + 3, i + 6]
        };
      }
    }
    return;
  }

  function verificarLinhas(casas) {
    for (let i = 0; i < 3; i++) {
      if (casas[i * 3] !== "" && casas[i * 3] === casas[i * 3 + 1] && casas[i * 3] === casas[i * 3 + 2]) {
        return {
          vencedor: casas[i * 3],
          casas: [i * 3, i * 3 + 1, i * 3 + 2]
        };
      }
    }
    return;
  }

  function verificarDiagonais(casas) {
    if (casas[0] !== "" && casas[0] === casas[4] && casas[0] === casas[8]) {
      return {
        vencedor: casas[4],
        casas: [0, 4, 8]
      };
    }
    if (casas[2] !== "" && casas[2] === casas[4] && casas[2] === casas[6]) {
      return {
        vencedor: casas[4],
        casas: [2, 4, 6]
      };
    }
    return;
  }
  return verificarColunas(casas) || verificarLinhas(casas) || verificarDiagonais(casas);
}