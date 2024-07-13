const axios = require("axios");

const trakt = axios.create({
  baseURL: "https://api.trakt.tv",
  headers: {
    "Content-Type": "application/json",
    "trakt-api-version": "2",
    "trakt-api-key": process.env.TRAKT_API_KEY,
  },
});

module.exports = trakt;
