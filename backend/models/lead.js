import mongoose, { mongo } from "mongoose";


const leadSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true,
        },

        budgetRange: {
            type: String,
            required: true,
            trim: true,
        },

        message: {
            type: String,
            required: true,
            trim: true,
        },

        status: {
            type: String,
            enum: ["New", "Contacted", "Closed"],
            default: "New",
        },
    },
    {
        timestamps: true,
    }
);

const Lead = mongoose.model("Lead", leadSchema)

export default Lead;