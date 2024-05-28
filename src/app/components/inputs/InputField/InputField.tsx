"use client";

import { useState } from "react";
import { Field, ErrorMessage, useField } from "formik";
import { Eye, EyeOff } from "lucide-react";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  name,
  type = "text",
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [field, meta] = useField(name);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative">
      <div className="flex justify-between w-full">
        <label className="text-base" htmlFor={name}>
          {label}
        </label>
        <ErrorMessage
          name={name}
          component="span"
          className="text-base text-red-500"
        />
      </div>
      <Field
        type={showPassword && type === "password" ? "text" : type}
        {...field}
        id={name}
        className={`w-full p-2 px-3 mt-1 text-sm outline-none rounded-[15px] border ${
          meta.touched && meta.error ? "border-red-500" : "border-[#AEB1C7]"
        }`}
      />
      {type === "password" && (
        <button
          type="button"
          onClick={handleTogglePasswordVisibility}
          className="absolute right-3 mt-0.5 top-2/3 transform -translate-y-1/2"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default InputField;
