import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import connectDB from "./config/db.js";
import Admin from "./models/Admin.js";

dotenv.config();

const seedAdmin = async () => {
  try {
    await connectDB();

    const existingAdmin = await Admin.findOne({
      email: "admin@leadflow.com",
    });

    if (existingAdmin) {
      console.log("Admin already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(
      "Admin@123",
      12
    );

    await Admin.create({
      name: "LeadFlow Admin",
      email: "admin@leadflow.com",
      password: hashedPassword,
    });

    console.log("Admin created successfully");

    process.exit(0);
  } catch (error) {
    console.error("Admin creation failed:", error.message);
    process.exit(1);
  }
};

seedAdmin();