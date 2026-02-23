const path = require("path");
const fs = require("fs");

const dirName = path.dirname(__filename);
const dataFolder = path.join(dirName, "datafolder");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log(`Data Folder created successfully `);
}
const filePath = path.join(dataFolder, "data.txt");
fs.writeFileSync(filePath, "Hello from a upcomming node js developer ");
