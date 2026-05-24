import React from "react";
import { motion } from "framer-motion";

interface ServiceOption {
  value: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface ServiceSelectProps {
  selectedService: string;
  onChange: (service: string) => void;
}

const ServiceSelect: React.FC<ServiceSelectProps> = ({ selectedService, onChange }) => {
  const serviceOptions: ServiceOption[] = [
    {
      value: "Web Design",
      label: "Web Design",
      description: "Beautiful, responsive websites designed to impress and engage your audience.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
          <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
          <path d="M2 2l7.586 7.586"></path>
          <circle cx="11" cy="11" r="2"></circle>
        </svg>
      )
    },
    {
      value: "Web Development",
      label: "Web Development",
      description: "Functional, optimized, and scalable web applications built with modern technologies.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      )
    },
    {
      value: "Branding",
      label: "Branding",
      description: "Distinctive visual identity design that helps your business stand out from competitors.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path>
          <line x1="16" y1="8" x2="2" y2="22"></line>
          <line x1="17.5" y1="15" x2="9" y2="15"></line>
        </svg>
      )
    },
    {
      value: "Consultation",
      label: "Consultation",
      description: "Expert advice and strategy to help you make informed decisions about your digital presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      )
    },
    {
      value: "Other",
      label: "Other Services",
      description: "Have a specific need not listed here? We're adaptable and would love to discuss your requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
      )
    }
  ];
  
  return (
    <div className="w-full">
      <p className="text-[#202d3f] font-medium mb-3">Service Required <span className="text-red-400">*</span></p>
      <div className="grid md:grid-cols-5 gap-3">
        {serviceOptions.map((option) => (
          <motion.div
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`relative overflow-hidden cursor-pointer rounded-lg border p-4 transition-all ${
              selectedService === option.value
                ? "border-[#202d3f] bg-[#202d3f]/5"
                : "border-gray-200 hover:border-[#202d3f]/30 bg-gray-50"
            }`}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {selectedService === option.value && (
              <motion.div
                className="absolute top-0 right-0 p-1 bg-[#202d3f] text-white"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </motion.div>
            )}
            
            <div className="flex flex-col items-center text-center">
              <div className={`mb-3 ${selectedService === option.value ? "text-[#202d3f]" : "text-gray-500"}`}>
                {option.icon}
              </div>
              <h4 className="text-sm font-medium mb-2">{option.label}</h4>
              <p className="text-xs opacity-70 hidden md:block">{option.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSelect;