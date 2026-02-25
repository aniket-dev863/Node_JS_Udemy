const path = require("path");
const fs = require("fs");
const { log } = require("console");

const dirName = path.dirname(__filename);
const dataFolder = path.join(dirName, "datafolder");
if (!fs.existsSync(dataFolder)) {
  fs.mkdirSync(dataFolder);
  console.log(`Data Folder created successfully `);
}
const filePath = path.join(dataFolder, "data.txt");
fs.writeFileSync(filePath, "Hello from a upcomming node js developer ");

// async way of creating a file in the node js one .

const asyncFilePath = path.join(dataFolder, "Async.txt");
fs.writeFile(
  asyncFilePath,
  "This is a async file created by the node js upcomming node js develper",
  (err) => {
    if (err) throw err;
    console.log(`File written using async successful `);

    fs.readFile(asyncFilePath, "utf8", (err, data) => {
      console.log("This is the data present in the file:", data);
    });

    fs.appendFile(
      asyncFilePath,
      "\n Im adding new line to the text file using a sync file append",
      (err) => {
        if (err) throw err;
        console.log(`New line appended to the file `);
        fs.readFile(asyncFilePath, "utf-8", (err, updatedData) => {
          if (err) throw err;
          console.log(`Updated data is here :`, updatedData);
        });
      },
    );
  },
);
