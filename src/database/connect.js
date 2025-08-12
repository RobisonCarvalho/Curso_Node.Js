const mongoose = require("mongoose");

const connestToDatabase = async () => {
  await mongoose.connect(
    "mongodb+srv://Admin:<db_password>@cluster0.vobxeen.mongodb.net/",
    (error) => {
      if (error) {
        return console.log(
          "Ocorreu um erro ao se conectar com o banco de dados!"
        );
      }

      return console.log("Conexão ao banco de dados realizada com sucesso!");
    }
  );
};

module.exports = connestToDatabase