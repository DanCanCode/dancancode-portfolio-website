const path = require("path");
const express = require("express");
const app = express();

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static middleware
app.use(express.static(path.join(__dirname, "../public")));

app.use("/api", require("./index.js")); // include our routes!

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
}); // Send index.html for any other requests

// 404
app.use((req, res, next) => {
  if (path.extname(req.path).length > 0) {
    res.status(404).end();
  } else {
    next();
  }
});

// Error catching endware
app.use((err, req, res, next) => {
  console.error(err, typeof next);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || "Internal server error.");
});

const PORT = process.env.PORT || 1337;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}
    http://localhost:${PORT}/`);
});
