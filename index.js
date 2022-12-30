(() => {
  window.onload = () => {
    fetch("https://www.tsujio.org/games/games.json")
      .then((res) => res.json())
      .then((data) => {
        const tmpl = document.querySelector("#game-container-template").content
        const gamesContainer = document.querySelector("#games-container")

        for (const game of data.games) {
          const container = document.importNode(tmpl, true)
          container.querySelector(".game-title").textContent = game.title
          container.querySelector(".game-link").href = game.link
          container.querySelector(".game-image").src = game.image
          container.querySelector(".game-description").textContent = game.description

          gamesContainer.appendChild(container)
        }
      })
  }
})()
