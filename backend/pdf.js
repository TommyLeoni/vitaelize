var pdf = require("html-pdf");
var mailer = require("./templating/mailer");

module.exports = function(html) {
  pdf
    .create(html, { format: "Letter" })
    .toFile("./example.pdf", function(err, res) {
      if (err) return console.log(err);
      mailer.send("tomasoleoni011@gmail.com");
      console.log(res);
    });
};
