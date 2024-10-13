var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("about", { title: "about", layout: "main" });
});
router.get("/json", function (req, res, next) {
  res.json({
    message: "About Us",
    description:
      "We are a coffee company dedicated to providing the best coffee experience.",
    mission: "To bring the best coffee to every cup.",
    vision: "To be the leading coffee brand in the world.",
  });
});
module.exports = router;
