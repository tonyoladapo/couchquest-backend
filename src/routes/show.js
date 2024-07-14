const express = require("express");
const { showDetails } = require("../controllers/show");

const router = express.Router();

router.route("/").get(showDetails);

module.exports = router;
