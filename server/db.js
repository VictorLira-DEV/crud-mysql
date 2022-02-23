const Sequelize = require("sequelize");
const sequelize = new Sequelize("crud-movies", "root", "victor", {
  host: "localhost",
  dialect: "mysql",
});

const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING,
    },
    conteudo: {
        type: Sequelize.TEXT,
    },
})

Postagem.sync({force: true});

// Postagem.create({
//     titulo: "jlajsdfçladdssdfjsfçlasdjfalsdf",
//     conteudo: "lkdjfçlsadksdfsdfjfçldsfkjçlkjdsfçlkjçl"
// })

sequelize
  .authenticate()
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));