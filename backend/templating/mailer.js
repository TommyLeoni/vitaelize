const nodemailer = require("nodemailer");

let transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "vitaelize.noreply@gmail.com",
    pass: "vitaelize-it-out"
  }
});

module.exports = {
  send: function(receiver) {
    const message = {
      from: "vitaelize.noreply@gmail.com", // Sender address
      to: receiver, // List of recipients
      subject: "Your CV has arrived!", // Subject line
      text: "Attached you will find your newly created Curriculum Vitae - enjoy!",
      attachments: [
        {
          filename: "your-cv.pdf",
          path: "./templating/cv.pdf"
        }
      ] // Plain text body
    };

    transport.sendMail(message, function(err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log(info);
      }
    });
  }
};
