const path = require("path");
console.log("Name of the directory is :", path.dirname(__filename));
console.log("Name of the file", path.basename(__filename));
console.log("Extension of this file is ", path.extname(__filename));
