const { Router } = require("express");

const router = Router();

router.get("/", (_, res) => res.json({ pong: true }));

module.exports = router;