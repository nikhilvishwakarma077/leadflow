import React from "react";

const FieldError = ({ message }) => {
  return (
    <p className="mt-2 text-xs text-red-400">
      {message}
    </p>
  );
};

export default FieldError;