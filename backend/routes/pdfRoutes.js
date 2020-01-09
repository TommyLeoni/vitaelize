const router = require("express").Router();
const verify = require("./verifyToken");
const generator = require("../templating/generator");
const pdfController = require("../pdf");

router.post("/generate", verify, async (req, res) => {
  try {
    //const pdfSettings = req.body.pdfSettings;
    //pdfController(generator.first(pdfSettings));
    res.send({msg: req.files.portrait.name})
    res.send({msg: "Your PDF was successfully created and sent to your email!"})
  } catch (error) {
      console.log(error);
    res.status(500).send("An error occurred while creating your pdf.");
  }
});

module.exports = router;
