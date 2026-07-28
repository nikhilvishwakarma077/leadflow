import mongoose from "mongoose";
import Lead from "../models/Lead.js";

// Create a new lead
export const createLead = async (req, res) => {
  try {
    const { name, email, budgetRange, message } = req.body;

    const lead = await Lead.create({
      name,
      email,
      budgetRange,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Lead submitted successfully",
      lead,
    });
  } catch (error) {
    console.error("Create lead error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create lead",
    });
  }
};


// Get all leads + search
export const getLeads = async (req, res) => {
  try {
    const { search,status } = req.query;

    const filter = {};

    if (search) {
      filter.$or = [
        {
          name: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    if (status) {
            filter.status = status;
        }

    const leads = await Lead.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: leads.length,
      leads,
    });
  } catch (error) {
    console.error("Get leads error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch leads",
    });
  }
};


export const getLeadById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid lead ID",
      });
    }

    const lead = await Lead.findById(id);

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      lead,
    });
  } catch (error) {
    console.error("Get lead error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to fetch lead",
    });
  }
};


export const updateLeadStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid lead ID",
      });
    }

    const lead = await Lead.findByIdAndUpdate(
      id,
      { status },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!lead) {
      return res.status(404).json({
        success: false,
        message: "Lead not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Lead status updated successfully",
      lead,
    });
  } catch (error) {
    console.error("Update lead status error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to update lead status",
    });
  }
};