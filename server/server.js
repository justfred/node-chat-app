const path = require('path');
const express = require('express');

//new express app
var app = express();

//publish the default path to public directory
const publicPath = path.join(__dirname, '../public');
app.use(express.static(publicPath));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
