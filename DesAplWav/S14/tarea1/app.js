const express = require("express");
const app = express();
const routes = require("./routes");

app.use(express.static("public"));
app.use(express.json());
app.use("/", routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});