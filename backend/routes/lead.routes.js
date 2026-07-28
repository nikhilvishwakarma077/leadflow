import express from "express";

import {
  createLead,
  getLeads,
  getLeadById,
  updateLeadStatus,
} from "../controllers/lead.controller.js";

import { protect } from "../middleware/auth.middleware.js";

import { validate } from "../middleware/validate.middleware.js";

import {
  createLeadSchema,
  updateLeadStatusSchema,
} from "../validators/lead.validator.js";

const router = express.Router();

// Public
router.post(
  "/",
  validate(createLeadSchema),
  createLead
);

// Protected
router.get(
  "/",
  protect,
  getLeads
);

router.get(
  "/:id",
  protect,
  getLeadById
);

router.patch(
  "/:id/status",
  protect,
  validate(updateLeadStatusSchema),
  updateLeadStatus
);

export default router;