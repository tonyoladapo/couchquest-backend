const app = require("./startup/app");

const PORT = process.env.PORT || 6000;

const server = app.listen(PORT, () => {
  console.log(`Server running on ${process.env.NODE_ENV} mode on port ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`ERROR: ${err.message}`.red);
  //Close server and exit process
  server.close(() => process.exit(1));
});
