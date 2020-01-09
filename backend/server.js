// Importing packages
const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");

// Routes
const authRoutes = require("./routes/auth");
const pdfRoutes = require("./routes/pdfRoutes");

// Reading environment variables
dotenv.config();

// DB connect
mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => console.log("Connected to database ...")
);

// Routing and Parser settings
app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use("/api/pdf", pdfRoutes);
app.use("/api/users", authRoutes);

// Going live
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`API accessible on port ${port}`));
