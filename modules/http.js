const http = require("http");

const port = 8080;

const server = http.createServer((req, res) => {
  if (req.url == "/home") {
    res.writeHead(200, { "content-type": "text/html" });
    res.removeHeader("<h1>home page</h1>");
  }
});

server.listem(port, () => console.log(`Rondando na porta ${port}!`));
