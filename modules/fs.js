const fs = require("fs");
const path = require("path");

//criar uma pasta
fs.mkdir(path.join(__dirname, "/teste"), (error) => {
  if (error) {
    return console.log("Erro: ", error);
  }

  console.log("Pasta criada com sucesso!");
});

//Criar um arquivo
fs.writeFile(
  path.joim(__dirname, "/test", "test.txt"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("Erro: ", error);
    }

    console.log("Arquivo criado com sucesso!");
  }
);

// Adicionar à um arquivo
fs.appendFile(
  path.join(__dirname, "/test", "test.txt"),
  "hello world!",
  (error) => {
    if (error) {
      return console.log("erro: ", error);
    }

    console.log("arquivo modificado com sucesso");
  }
);

// Ler arquivo
fs.readFile(
  path.join(__dirname, "/test", "test.txt"),
  "utf8",
  (error, data) => {
    if (error) {
      return console.log("Error: ", error);
    }

    console.log(data);
  }
);
