var replace = require("replace");
replace({
  regex: "var isSpin = true;",
  replacement: "var isSpin = false;",
  paths: ['bulba/bulba.js'],
  recursive: false,
  silent: false,
});