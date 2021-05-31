const express = require("express");

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 8080;
    this.middleware();
    this.routes();
  }
  middleware() {
    this.app.use(express.json()); // lectura y parse body
  }
  routes() {
    this.app.use("/api/catalogs", require("../routes/products"));
    this.app.use("/api/update-cart", require("../routes/cart"));
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log("Servidor corriendo en puerto", this.PORT);
    });
  }
}

module.exports = Server;
