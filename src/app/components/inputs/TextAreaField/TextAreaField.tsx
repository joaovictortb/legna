"use client";

import { useField } from "formik";

interface TextAreaFieldProps {
  label: string;
  name: string;
  rows?: number;
}

const TextAreaField: React.FC<TextAreaFieldProps> = ({
  label,
  name,
  rows = 4,
}) => {
  const [field, meta] = useField(name);

  return (
    <div className="relative mt-4">
      <div className="flex justify-between w-full">
        <label className="text-base" htmlFor={name}>
          {label}
        </label>
        {meta.touched && meta.error ? (
          <span className="text-base text-red-500">{meta.error}</span>
        ) : null}
      </div>
      <textarea
        {...field}
        id={name}
        rows={rows}
        className={`border mt-1 outline-none ${
          meta.touched && meta.error ? "border-red-500" : "border-[#AEB1C7]"
        } rounded-[15px] focus:ring-[#AEB1C7] focus:border-[#AEB1C7] block w-full text-base p-3`}
        placeholder="Escreva seus comentários aqui..."
      />
    </div>
  );
};

export default TextAreaField;
