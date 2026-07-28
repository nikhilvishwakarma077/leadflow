import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";
import leadRoutes from "./routes/lead.routes.js"
import authRoutes from "./routes/auth.routes.js";

import { errorHandler } from "./middleware/error.middleware.js";

dotenv.config();

const app = express();

// Database connection
connectDB();

// Middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/leads",leadRoutes)
app.use("/api/auth",authRoutes)

app.use(errorHandler);

// Test route
app.get("/", (req, res) => {
  res.json({
    message: "LeadFlow API is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});