var express = require("express");
var router = express.Router();

/* GET contact page. */
router.get("/", function (req, res, next) {
  res.render("contact", { title: "Contact Us", layout: "main" });
});

/* GET contact JSON data. */
router.get("/json", function (req, res, next) {
  res.json({
    message: "Contact Us",
    email: "contact@kopikopi.com",
    phone: "+1234567890",
    address: "123 Coffee Street, Java City, 12345",
  });
});

module.exports = router;
