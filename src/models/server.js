const express = require("express");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 8080;
    this.conectarDB()
    this.middleware();
    this.routes();
  }

  async conectarDB() {
    await dbConnection();
}
  middleware() {
    this.app.use(express.json()); // lectura y parse body
  }
  routes() {
    this.app.use("/api/catalogs", require("../routes/products"));
    this.app.use("/api/update-cart", require("../routes/cartItems"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("Servidor corriendo en puerto", this.PORT);
    });
  }
}

module.exports = Server;
