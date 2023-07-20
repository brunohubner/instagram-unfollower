function abrirNovaAba(url) {
  const newWindow = window.open(url, '_blank', 'noopener noreferrer');
  if (newWindow) newWindow.opener = null;
}

const paraDeixarDeSeguir = [];

function abrirAbas() {
  paraDeixarDeSeguir.forEach((seguidor) => {
    abrirNovaAba(`https://www.instagram.com/${seguidor}`);
  });
}
