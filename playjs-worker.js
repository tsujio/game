const params = new URLSearchParams(self.location.search);
if (!["www.tsujio.org", "localhost"].includes(new URL(params.get("url"), self.location.href).hostname)) {
  throw new Error;
}
await import(params.get("url"));
