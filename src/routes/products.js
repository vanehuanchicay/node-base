const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
    res.json({
        'msg': 'get api'
    });
  });
  
module.exports = router;
