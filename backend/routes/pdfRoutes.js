const router = require("express").Router();
const verify = require("./verifyToken");
const generator = require("../templating/generator");
const pdfController = require("../pdf");
const fs = require("fs");

router.post("/generate", verify, async (req, res) => {
  try {
    const cv = req.body;
    pdfController(generator.first(cv));
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occured while generating your pdf");
  }
});

router.post("/uploadImage", verify, async (req, res) => {
  try {
    var pic = req.files.portrait;
    pic.mv(`templating/tmp/${pic.name}`, function(err) {
      if (err) return res.status(500).send(err);
      res.status(200).send(pic.name);
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error occurred while creating your pdf.");
  }
});

module.exports = router;
