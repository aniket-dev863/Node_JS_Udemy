// this is how the callback hell is shown
const fs = require("fs");

fs.readFile("demo.txt", "utf-8", (err, data) => {
  console.log(`Reading the file in a synchronous way `);
  console.log("Data:", data);
  fs.appendFile(
    "demo.txt",
    "\n Im writing this new line to the file ",
    (err) => {
      if (err) {
        console.error("There is a error", err);
      }
      fs.readFile("demo.txt", "utf-8", (err, data) => {
        if (err) {
          console.error(
            "There is a error while reading newly appended file :",
            err,
          );
        }
        const captialDATA = data.toUpperCase();
        fs.writeFile("demo.txt", captialDATA, (err) => {
          if (err) {
            console.log("There is error while writing capital to file ", err);
          }

          fs.readFile("demo.txt", "utf-8", (err, Finaldata) => {
            if (err) {
              console.error("There is error reading the final data ", err);
            }
            console.log(
              "This is the data in the finally updated file:",
              Finaldata,
            );
          });
        });
      });
    },
  );
});

/**
 * Works fine this isthe best .
 */
