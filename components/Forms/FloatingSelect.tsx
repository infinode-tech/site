import React, { useState } from "react";
import { motion } from "framer-motion";

interface Option {
  value: string;
  label: string;
}

interface FloatingSelectProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
}

const FloatingSelect: React.FC<FloatingSelectProps> = ({
  id,
  name,
  label,
  required = false,
  value,
  onChange,
  options,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const isActive = isFocused || value.length > 0;
  
  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div className="relative">
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        className="w-full bg-gray-50 border border-gray-200 rounded-lg p-3 pt-6 focus:outline-none focus:border-[#202d3f] focus:ring-1 focus:ring-[#202d3f] transition appearance-none peer"
      >
        <option value="" disabled>Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      <motion.label
        htmlFor={id}
        initial={false}
        animate={{
          y: isActive ? -12 : 0,
          scale: isActive ? 0.85 : 1,
          x: isActive ? -5 : 0,
        }}
        transition={{ duration: 0.15, ease: "easeOut" }}
        className={`absolute left-3 top-3 origin-left cursor-text text-gray-600 ${
          isActive ? "text-[#202d3f]" : "text-gray-500"
        } transition-colors pointer-events-none`}
      >
        {label} {required && <span className="text-red-400">*</span>}
      </motion.label>
      
      {/* Custom dropdown arrow */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6"/>
        </svg>
      </div>
    </div>
  );
};

export default FloatingSelect;