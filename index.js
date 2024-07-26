const express = require("express");
const path = require("path");
const cors = require("cors");
const userRoutes = require("./routes/user");
const connectToDb = require("./config/db");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

// Connect to the database
connectToDb();

// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "public/upload")));

app.get("/", (req, res) => {
  res.send("API is running");
});

// API routes
app.use("/api/v1", userRoutes);

app.listen(PORT, () => {
  console.log(`API is running on http://localhost:${PORT}`);
});
