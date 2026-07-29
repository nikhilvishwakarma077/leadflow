import { Loader2, Send } from "lucide-react";

import FormField from "./FormField";
import BudgetSelect from "./BudgetSelect";
import ProjectMessage from "./ProjectMessage";

const LeadFormCard = ({
  formData,
  errors,
  loading,
  onChange,
  onSubmit,
}) => {
  return (
    <>
      <div>
        <h2 className="text-xl font-semibold text-white">
          Submit your details
        </h2>

        <p className="mt-2 text-sm text-[#737373]">
          All fields are required.
        </p>
      </div>

      <form
        onSubmit={onSubmit}
        className="mt-8 space-y-5"
      >
        <FormField
          label="Full Name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={formData.name}
          onChange={onChange}
          error={errors.name}
        />

        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="john@example.com"
          value={formData.email}
          onChange={onChange}
          error={errors.email}
        />

        <BudgetSelect
          value={formData.budgetRange}
          onChange={onChange}
          error={errors.budgetRange}
        />

        <ProjectMessage
          value={formData.message}
          onChange={onChange}
          error={errors.message}
        />

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
          By submitting this form, you agree to be
          contacted regarding your project inquiry.
        </p>
      </form>
    </>
  );
};

export default LeadFormCard;