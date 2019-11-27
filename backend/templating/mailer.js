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
      from: "elonmusk@tesla.com", // Sender address
      to: receiver, // List of recipients
      subject: "Design Your Model S | Tesla", // Subject line
      text: "Have the most fun you can in a car. Get your Tesla today!",
      attachments: [
        {
          filename: "your-cv.pdf",
          path: "./example.pdf"
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
