const router = require("express").Router();
const verify = require("./verifyToken");
const generator = require("../templating/generator");
const pdfController = require("../pdf");
const fs = require("fs");

router.post("/generate", verify, async (req, res) => {
  try {
    var pic = req.files.portrait;
    const pdfSettings = req.body.pdfSettings;

    pic.mv(`templating/tmp/${pic.name}`, function(err) {
      if (err) return res.status(500).send(err);
      pdfController(generator.first(pdfSettings, pic.name));
      res.send({ msg: pic.name });
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while creating your pdf.");
  }
});

module.exports = router;
