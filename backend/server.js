import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import leadRoutes from "./routes/lead.routes.js"
import { errorHandler } from "./middleware/error.middleware.js";

import cors from "cors";
import cookieParser from "cookie-parser";


const app = express(); 

// Database connection
connectDB();

app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://leadflow-wine-iota.vercel.app",
  ],
  credentials: true
}));


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