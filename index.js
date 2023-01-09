(() => {
  window.onload = () => {
    fetch("/games.json")
      .then((res) => res.json())
      .then((data) => {
        const query = Object.fromEntries(location.search.substr(1,).split('&').map((kv) => kv.split('=')))

        const tmpl = document.querySelector("#game-container-template").content
        const gamesContainer = document.querySelector("#games-container")

        for (const game of data.games) {
          const container = document.importNode(tmpl, true)
          container.querySelector(".game-title").textContent = game.title

          const link = new URL(game.link)
          if (query.logging === "true" || query.logging === "false") {
            link.searchParams.set("logging", query.logging)
          }
          container.querySelector(".game-link").href = link.toString()

          container.querySelector(".game-image").src = game.image
          container.querySelector(".game-description").textContent = game.description

          gamesContainer.appendChild(container)
        }
      })
  }
})()
