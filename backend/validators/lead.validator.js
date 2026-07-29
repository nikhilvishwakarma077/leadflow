import Joi from "joi";

export const createLeadSchema = Joi.object({
  name: Joi.string().trim().min(2).max(100).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters",
    "string.max": "Name cannot exceed 100 characters",
    "any.required": "Name is required",
  }),

  email: Joi.string().trim().lowercase().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Please provide a valid email address",
    "any.required": "Email is required",
  }),

  budgetRange: Joi.string()
    .valid(
      "$1,000 - $5,000",
      "$5,000 - $10,000",
      "$10,000 - $25,000",
      "$25,000+"
    )
    .required()
    .messages({
      "any.only":
        "Please select a valid budget range",
      "any.required":
        "Budget range is required",
    }),

  message: Joi.string().trim().min(10).max(2000).required().messages({
    "string.empty": "Message is required",
    "string.min": "Message must be at least 10 characters",
    "string.max": "Message cannot exceed 2000 characters",
    "any.required": "Message is required",
  }),
});


export const updateLeadStatusSchema = Joi.object({
  status: Joi.string()
    .valid("New", "Contacted", "Closed")
    .required()
    .messages({
      "any.only": "Status must be New, Contacted, or Closed",
      "any.required": "Status is required",
    }),
});