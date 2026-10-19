const { Router } = require("express");

const router = Router();

router.get("/", (_, res) => {
  const version = require("../../package.json").version;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({ status: "ok", version });
});

module.exports = router;
