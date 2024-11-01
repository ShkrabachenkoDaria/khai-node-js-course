const express = require("express");
const booksRoutes = require("./books.routes");
const { logRequest } = require("./middleware");
const { errorResponder } = require("./error.middleware");

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(logRequest);
app.use(booksRoutes);
app.use(errorResponder);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});