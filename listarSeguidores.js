function limpaUsername(username) {
  if (!username || typeof username !== 'string') return null;
  return username?.split('/')?.[3] || null;
}

function listarSeguidores() {
  const divsSeguidores = Array.from(
    document.querySelector('.lista-de-usuarios')?.children
    || []
  );

  const usernames = divsSeguidores.map((div) => {
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

    return usernameSemStories || usernameComStories;
  });

  console.log(JSON.stringify(usernames, null, 2));
}

listarSeguidores();