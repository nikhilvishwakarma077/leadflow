import React from "react";
import FieldError from "./FieldError";

const budgetOptions = [
  "$1,000 - $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000+",
];

const BudgetSelect = ({
  value,
  onChange,
  error,
}) => {
  return (
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
        value={value}
        onChange={onChange}
        className={`w-full rounded-lg border bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition focus:ring-2 ${
          error
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

        {budgetOptions.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#171717]"
          >
            {option}
          </option>
        ))}
      </select>

      {error && <FieldError message={error} />}
    </div>
  );
};

export default BudgetSelect;