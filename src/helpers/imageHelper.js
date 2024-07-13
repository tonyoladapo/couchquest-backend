const { tmdbEndpoints } = require("../apis/endpoints");
const { getShowDetails } = tmdbEndpoints;

exports.getImages = async (tmdbId) => {
  try {
    let images = { poster: null, backdrop: null };

    if (tmdbId) {
      let tmdbData = await getShowDetails(tmdbId);

      const { poster_path, backdrop_path } = tmdbData.data;

      images.poster = poster_path;
      images.backdrop = backdrop_path;
    }

    return images;
  } catch (error) {
    return { poster: null, backdrop: null };
  }
};
