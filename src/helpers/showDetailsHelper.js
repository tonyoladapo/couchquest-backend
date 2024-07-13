const { getImages } = require("./imageHelper");

exports.getBasicShowDetails = async (show) => {
  try {
    const tmdbId = show.ids.tmdb;
    const images = await getImages(tmdbId);

    return { ...show, images };
  } catch (error) {
    console.log(error);
  }
};
