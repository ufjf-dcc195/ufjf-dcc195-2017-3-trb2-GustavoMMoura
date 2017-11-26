module.exports.indexEJS = function (req, res, next) {
  res.render('index', {
    titulo: "DCC195 - Trabalho 2",
    links: [
      { name: "Amigo oculto", url: "amigo.html" },
      { name: "Jogo da velha", url: "velha.html" },
      { name: "Sobre", url: "sobre.html" }
    ]
  });
}

module.exports.sobreEJS = function (req, res, next) {
  res.render('sobre', {
    titulo: "DCC195 - Trabalho 2 - Sobre",
    nome: "Gustavo Magalhães Moura",
    matricula: "201235015",
    email: "gmmoura@ice.ufjf.br",
    curso: "Ciência da Computação"
  });
}
