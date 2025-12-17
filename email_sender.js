const express = require("express");
const cors = require("cors");
require("dotenv").config();

const sendMailController = require("./controllers/sendMailController");

const server = express();
const PORT = process.env.PORT || 3003;

server.use(express.json());
server.use(cors({ origin: "*" }));

server.get('/', (req, res) => {
  res.send('Hello world');
});

// routes
server.post("/send", sendMailController.sendEmail);

//global error handler
server.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || "Internal Server Error",
  });
});

server.listen(PORT, () => {
  console.log(`HTTP server running on http://localhost:${PORT}`);
});
