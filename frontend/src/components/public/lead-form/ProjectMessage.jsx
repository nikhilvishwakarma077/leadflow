import FieldError from "./FieldError";

const ProjectMessage = ({ value, onChange, error}) => {
  return (
    
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
        value={value}
        onChange={onChange}
        className={`w-full resize-none rounded-lg border bg-[#0D0D0D] px-4 py-3 text-sm text-white outline-none transition placeholder:text-[#525252] focus:ring-2 ${
          error
            ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/10"
            : "border-white/10 focus:border-[#FF6B00] focus:ring-[#FF6B00]/10"
        }`}
      />

      {error && <FieldError message={error} />}
    </div>
  );
};

export default ProjectMessage;