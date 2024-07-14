const { getImages } = require("./imageHelper");
const { traktEndpoints } = require("../apis/endpoints");

exports.getBasicShowDetails = async (show) => {
  try {
    const tmdbId = show.ids.tmdb;
    const images = await getImages(tmdbId);

    return { ...show, images };
  } catch (error) {
    console.log(error);
  }
};

exports.getFullShowDetails = async (traktid) => {
  try {
    const showDetails = await traktEndpoints.getShowDetails(traktid, {
      params: { extended: "full" },
    });

    const tmdbId = showDetails.data.ids.tmdb;
    const images = await getImages(tmdbId);

    const seasons = await this.getShowSeasons(traktid);

    return { ...showDetails.data, images, seasons };
  } catch (error) {
    console.log(error);
  }
};

exports.getShowSeasons = async (traktid) => {
  try {
    const seasons = await traktEndpoints.getShowSeasons(traktid, {
      params: { extended: "episodes" },
    });

    const seasonsWithoutSpecials = seasons.data.filter(
      ({ number }) => number !== 0
    );

    return seasonsWithoutSpecials;
  } catch (error) {
    console.log(error);
  }
};
