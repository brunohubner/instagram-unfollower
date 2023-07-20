function deixarDeSeguir() {
  const paraDeixarDeSeguir = window.paraDeixarDeSeguir || [];

  const divsParaDeixarDeSeguir = Array.from(
    document.querySelector('.lista-de-usuarios')?.children
    || []
  ).filter((div) => {
    const divSemStories = Array.from(div
      ?.firstChild
      ?.firstChild
      ?.firstChild
      ?.firstChild
      ?.firstChild
      ?.firstChild
      ?.firstChild
      ?.firstChild
      ?.childNodes || []);

    const usernameSemStories = limpaUsername(divSemStories[1].href);

    let usernameComStories = '';

    if (!usernameSemStories) {
      const urlUsername = div
        ?.firstChild
        ?.firstChild
        ?.firstChild
        ?.childNodes
        ?.[1]
        ?.firstChild
        ?.firstChild
        ?.firstChild
        ?.firstChild
        ?.firstChild
        ?.firstChild
        ?.firstChild
        ?.firstChild
        ?.href;

      usernameComStories = limpaUsername(urlUsername);
    }

    const username = usernameSemStories || usernameComStories;

    return paraDeixarDeSeguir.includes(username);
  });



  console.log(divsParaDeixarDeSeguir);


  // const botaoDeixarDeSeguir = document.querySelector('.botao-deixar-de-seguir');

  // botaoDeixarDeSeguir?.click();
}

deixarDeSeguir();