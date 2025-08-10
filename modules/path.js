const path = require("path");

// Basenome
console.log(path.basename(__filename));

// Nome do diretório atual
console.log(path.dirname(__filename));

//Extenção de arquivo
console.log(path.extname(__filename));

//Criar objeto Path
console.log(path.parse(__filename));

// Juntar caminhos de arquivos
console.log(path.join(__dirname, "teste", "Test.html"));