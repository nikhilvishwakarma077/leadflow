import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  Send,
} from "lucide-react";

import api from "../../services/api";

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

  const [success, setSuccess] =
    useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear field error
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    // Clear API error
    if (error) {
      setError("");
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email =
        "Email is required.";
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

  // Submit form
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
        budgetRange:
          formData.budgetRange,
        message:
          formData.message.trim(),
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
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#FF6B00]">
            Let's work together
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tell us about your project.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-7 text-[#A3A3A3]">
            Share a few details about what you're
            looking to build. Our team will review
            your requirements and get back to you.
          </p>

          <div className="mt-8 space-y-4">
            <Benefit text="Tell us what you need" />

            <Benefit text="Share your estimated budget" />

            <Benefit text="We'll review your requirements" />
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-white/10 bg-[#171717] p-6 shadow-2xl shadow-black/20 sm:p-8">
          {success ? (
            <SuccessState
              onReset={() => {
                setSuccess(false);
              }}
            />
          ) : (
            <>
              <div>
                <h2 className="text-xl font-semibold text-white">
                  Submit your details
                </h2>

                <p className="mt-2 text-sm text-[#737373]">
                  All fields are required.
                </p>
              </div>

              {/* API Error */}
              {error && (
                <div className="mt-6 flex items-start gap-3 rounded-lg border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400">
                  <AlertCircle
                    size={18}
                    className="mt-0.5 shrink-0"
                  />

                  <p>{error}</p>
                </div>
              )}

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >
                {/* Name */}
                <FormField
                  label="Full Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                {/* Email */}
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budgetRange"
                    className="mb-2 block text-sm font-medium text-[#A3A3A3]"
                  >
                    Budget Range
                  </label>

                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={
                      formData.budgetRange
                    }
                    onChange={handleChange}
                    className={`w-full rounded-lg border bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition focus:ring-2 ${errors.budgetRange
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                      : "border-white/10 focus:border-[#FF6B00] focus:ring-[#FF6B00]/10"
                      }`}
                  >
                    <option
                      value=""
                      className="bg-[#171717]"
                    >
                      Select your budget
                    </option>

                    <option
                      value="$1,000 - $5,000"
                      className="bg-[#171717]"
                    >
                      $1,000 - $5,000
                    </option>

                    <option
                      value="$5,000 - $10,000"
                      className="bg-[#171717]"
                    >
                      $5,000 - $10,000
                    </option>

                    <option
                      value="$10,000 - $25,000"
                      className="bg-[#171717]"
                    >
                      $10,000 - $25,000
                    </option>

                    <option
                      value="$25,000+"
                      className="bg-[#171717]"
                    >
                      $25,000+
                    </option>
                  </select>

                  {errors.budgetRange && (
                    <FieldError
                      message={
                        errors.budgetRange
                      }
                    />
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium text-[#A3A3A3]"
                  >
                    Project Details
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project, requirements, and goals..."
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full resize-none rounded-lg border bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#525252] focus:ring-2 ${errors.message
                      ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
                      : "border-white/10 focus:border-[#FF6B00] focus:ring-[#FF6B00]/10"
                      }`}
                  />

                  {errors.message && (
                    <FieldError
                      message={
                        errors.message
                      }
                    />
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#FF6B00] px-5 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#FF7A1A] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <Loader2
                        size={18}
                        className="animate-spin"
                      />

                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send size={17} />

                      Submit Request
                    </>
                  )}
                </button>

                <p className="text-center text-xs leading-5 text-[#525252]">
                  By submitting this form, you
                  agree to be contacted regarding
                  your project inquiry.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

/* ================= FORM FIELD ================= */

const FormField = ({
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  error,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-medium text-[#A3A3A3]"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#525252] focus:ring-2 ${error
          ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
          : "border-white/10 focus:border-[#FF6B00] focus:ring-[#FF6B00]/10"
          }`}
      />

      {error && (
        <FieldError message={error} />
      )}
    </div>
  );
};

/* ================= FIELD ERROR ================= */

const FieldError = ({ message }) => {
  return (
    <p className="mt-2 text-xs text-red-400">
      {message}
    </p>
  );
};

/* ================= BENEFIT ================= */

const Benefit = ({ text }) => {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2
        size={18}
        className="text-[#FF6B00]"
      />

      <span className="text-sm text-[#A3A3A3]">
        {text}
      </span>
    </div>
  );
};

/* ================= SUCCESS ================= */

const SuccessState = ({ onReset }) => {
  return (
    <div className="flex min-h-[500px] flex-col items-center justify-center text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B00]/10">
        <CheckCircle2
          size={28}
          className="text-[#FF6B00]"
        />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-white">
        Request submitted
      </h2>

      <p className="mt-3 max-w-sm text-sm leading-6 text-[#737373]">
        Thanks for reaching out. We've received
        your project details and will get back to
        you soon.
      </p>

      <button
        onClick={onReset}
        className="mt-8 rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-[#A3A3A3] transition-colors duration-200 hover:border-[#FF6B00]/40 hover:bg-[#FF6B00]/10 hover:text-white"
      >
        Submit another request
      </button>
    </div>
  );
};

export default LeadForm;