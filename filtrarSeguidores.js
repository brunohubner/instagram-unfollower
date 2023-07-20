const seguidores = require('./seguidores.json');
const seguindo = require('./seguindo.json');

function filtrarSeguidores() {
  const paraDeixarDeSeguir = seguindo.filter((seguidor) => {
    return !seguidores.includes(seguidor);
  });

  console.log(JSON.stringify(paraDeixarDeSeguir, null, 2));
}

filtrarSeguidores();