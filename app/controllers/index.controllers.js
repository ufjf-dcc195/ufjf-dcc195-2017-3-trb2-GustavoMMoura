module.exports.indexEJS = function (req, res, next) {
  res.render('index', { titulo: "DCC195 - Trabalho 2", links: [{ name: "Sobre", url: "sobre.html" }] });
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

module.exports.listaEJS = function (req, res, next) {
  res.render('lista', { titulo: "Lista", a: 3, b: 13 });
}

module.exports.cookiesEJS = function (req, res, next) {
  req.session.i = req.session.i || 1;
  req.session.ultimoAcesso = new Date();

  res.render('estado', {
    titulo: "Estado",
    i: req.session.i++,
    data: req.session.ultimoAcesso
  });
}
