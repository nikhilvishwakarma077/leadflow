import React from "react";
import { useState } from "react";
import { AlertCircle } from "lucide-react";
import api from "../../services/api";

import LeadFormIntro from "../../components/public/lead-form/LeadFormIntro";
import LeadFormCard from "../../components/public/lead-form/LeadFormCard";
import SuccessState from "../../components/public/lead-form/SuccessState";

const initialForm = {
  name: "",
  email: "",
  budgetRange: "",
  message: "",
};

const LeadForm = () => {
  
  const [formData, setFormData] =
    useState(initialForm);

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (error) {
      setError("");
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {
      newErrors.email =
        "Please enter a valid email.";
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange =
        "Please select a budget range.";
    }

    if (!formData.message.trim()) {
      newErrors.message =
        "Please tell us about your project.";
    } else if (
      formData.message.trim().length < 10
    ) {
      newErrors.message =
        "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSuccess(false);
    setError("");

    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      await api.post("/leads", {
        name: formData.name.trim(),
        email: formData.email.trim(),
        budgetRange: formData.budgetRange,
        message: formData.message.trim(),
      });

      setSuccess(true);
      setFormData(initialForm);
      setErrors({});
    } catch (error) {
      console.error(
        "Failed to submit lead:",
        error
      );

      setError(
        error.response?.data?.message ||
        "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-64px)] bg-[#0D0D0D]">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8 lg:py-24">
        <LeadFormIntro />

        <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-2xl shadow-black/20 sm:p-8">
          {success ? (
            <SuccessState
              onReset={() => setSuccess(false)}
            />
          ) : (
            <>
              {error && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  <AlertCircle
                    size={18}
                    className="mt-0.5 shrink-0"
                  />

                  <p>{error}</p>
                </div>
              )}

              <LeadFormCard
                formData={formData}
                errors={errors}
                loading={loading}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadForm;