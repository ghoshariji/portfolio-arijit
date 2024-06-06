const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const db = require("../server/conn/dbConn");
const contactRoute = require("../server/routes/contactRoute");
app.use("/api/contact", contactRoute);

app.get("/", async (req, res) => {
  return res.status(201).send({
    message: "Server start now available for request",
    success: true,
  });
});

app.listen(PORT, () => {
  console.log("Server Start");
});
