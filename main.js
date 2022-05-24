const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

app.use("/books", require("./routes/books.js"));
app.use("/genres", require("./routes/genres.js"));

app.listen(port, () =>
  console.log(`Servidor levantado en el puerto ${port} de Valencia`)
);
