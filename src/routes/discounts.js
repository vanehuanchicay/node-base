const { Router } = require("express");

const router = Router();

router.get("/", discountsGet);

module.exports = router;
