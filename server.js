// server.js
const express = require("express");
const app = express(); // Run the app by serving the static files
// in the dist directory
app.use(express.static("./dist/simple-card-apihandle"));
// Start the app by listening on the default
// Heroku port
app.listen(process.env.PORT || 8080);
