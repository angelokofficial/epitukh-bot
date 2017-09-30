var replace = require("replace");
replace({
  regex: "var isSpin = false;",
  replacement: "var isSpin = true;",
  paths: ['bulba/bulba.js'],
  recursive: false,
  silent: false,
});