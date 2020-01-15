var pdf = require("html-pdf");
var mailer = require("./templating/mailer");
const HTML5ToPDF = require("html5-to-pdf");
const path = require("path");

module.exports = function(html) {
  pdf
    .create(html, { format: "Letter" })
    .toFile("./templating/cv.pdf", function(err, res) {
      if (err) return console.log(err);
      //mailer.send("tomasoleoni011@gmail.com");
      console.log(res);
    });
};
