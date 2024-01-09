const express = require("express");
const port = 8000;

const app = express();

app.listen(port, (err) => {
  if (err) {
    console.log("Error on running the server!", err);
    return;
  }
  console.log(`Server is running on port: ${port}`);
});
