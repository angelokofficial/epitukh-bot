var replace = require("replace");
replace({
  regex: "var isSpin = true;",
  replacement: "var isSpin = false;",
  paths: ['test.js'],
  recursive: false,
  silent: false,
});