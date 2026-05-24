import React, { useState } from "react";
import { motion } from "framer-motion";

interface FloatingInputProps {
  type: string;
  id: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
}

const FloatingInput: React.FC<FloatingInputProps> = ({
  type,
  id,
  name,
  label,
  required = false,
  value,
  onChange,
  placeholder = "",
  rows = 1,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          rows={rows}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 pt-6 focus:outline-none focus:border-white transition peer"
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          value={value}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className="w-full bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] rounded-lg p-3 pt-6 focus:outline-none focus:border-white transition peer"
          placeholder={placeholder}
        />
      )}
      
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isActive ? -12 : 0,
          scale: isActive ? 0.85 : 1,
          x: isActive ? -5 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={`absolute left-3 top-3 origin-left cursor-text text-white ${
          isActive ? "opacity-80" : "opacity-60"
        } transition-colors pointer-events-none`}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </motion.label>
    </div>
  );
};

export default FloatingInput;