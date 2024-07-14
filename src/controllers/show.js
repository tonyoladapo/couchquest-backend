const asyncHandler = require("../middlewares/asyncHandler");
const { getFullShowDetails } = require("../helpers/showDetailsHelper");

exports.showDetails = asyncHandler(async (req, res, next) => {
  try {
    const { showid } = req.query;

    const details = await getFullShowDetails(showid);

    res.status(200).json(details);
  } catch (error) {
    console.log(error);
    return next(new ErrorResponse(`Error getting show details`, 500));
  }
});
