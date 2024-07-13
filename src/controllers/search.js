const asyncHandler = require("../middlewares/asyncHandler");
const { traktEndpoints } = require("../apis/endpoints");
const { getBasicShowDetails } = require("../helpers/showDetailsHelper");

// @desc Search for shows
// @route GET /api/search
// @access Public
exports.searchShows = asyncHandler(async (req, res, next) => {
  try {
    const { query } = req.query;

    const response = await traktEndpoints.searchShow({ params: { query } });

    const searchResults = await Promise.all(
      response.data.map((show) => getBasicShowDetails(show.show))
    );

    res.status(200).json(searchResults);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse(`Error searching for shows`, 500));
  }
});
