const { Router } = require("express");
const { cartItemsGet, cartItemsPost, cartItemsPut } = require("../controllers/cartItems");

const router = Router();

router.get("/", cartItemsGet);

router.post("/:id", cartItemsPost);

router.put("/:id", cartItemsPut);

module.exports = router;
