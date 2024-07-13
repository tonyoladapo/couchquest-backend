const express = require("express");
const { searchShows } = require("../controllers/search");

const router = express.Router();

router.route("/").get(searchShows);

module.exports = router;
