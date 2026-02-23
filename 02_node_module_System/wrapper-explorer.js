// node wrapeer explorer
console.log(`node module wrapper system demo `);
console.log("__filename", __filename);
console.log("__dirname", __dirname);

module.exports.greet = function (name) {
  console.log(`Hello to a new and special learner ${name}`);
};
