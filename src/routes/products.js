const { Router } = require("express");
const insertProduct = require("../controllers/products");

const router = Router();

router.get("/", productGet );
  
module.exports = router;
