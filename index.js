const express = require("express");
const connectToDb = require("./config/db");
const cors = require("cors");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

connectToDb();

app.use(express.static("public/upload"));

app.get("/", (req, res) => {
  res.send("API is ready to serve");
});

// API routes
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
