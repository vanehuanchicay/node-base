const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({
    msg: "get cart api",
  });
});
router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    msg: "post cart api",
    body,
  });
});
router.put("/:id", (req, res) => {
  const id = req.params.id;
  res.json({
    msg: "put cart api",
    id,
  });
});
router.delete("/:id", (req, res) => {
  res.json({
    msg: "delete cart api",
  });
});

module.exports = router;
