const params = new URLSearchParams(self.location.search);
const url = new URL(params.get("url"), self.location.href);
if (url.href.match(/^https:\/\/www.tsujio.org\/game-[\w-]+\/[\w-]+.js$/) || url.hostname == "localhost") {
  await import(params.get("url"));
}
