const trakt = require("./trakt");
const tmdb = require("./tmdb");

const traktEndpoints = {
  searchShow: (options) => trakt.get("/search/show", options),
  getShowDetails: (showId, options) => trakt.get(`/shows/${showId}`, options),
  getShowSeasons: (showId, options) =>
    trakt.get(`/shows/${showId}/seasons`, options),
};

const tmdbEndpoints = {
  getShowDetails: (showId, options) => tmdb.get(`/tv/${showId}`, options),
};

module.exports = { traktEndpoints, tmdbEndpoints };
