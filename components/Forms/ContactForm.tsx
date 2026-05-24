import { motion } from "framer-motion";
import { useState } from "react";
import FloatingInput from "./FloatingInput";
import FloatingSelect from "./FloatingSelect";
import ServiceSelect from "./SelectService";

type Service = "Web Design" | "Web Development" | "Branding" | "Consultation" | "Other";
type Timeline = "Urgent (1-2 weeks)" | "Standard (1-2 months)" | "Flexible (3+ months)";
type Budget = "Under $1,000" | "$1,000 - $5,000" | "$5,000 - $10,000" | "$10,000+";

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "" as Service,
    timeline: "" as Timeline,
    budget: "" as Budget,
    message: "",
    submitted: false,
    loading: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleServiceChange = (service: Service) => {
    setFormState((prev) => ({ ...prev, service }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState((prev) => ({ ...prev, loading: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState((prev) => ({ 
        ...prev, 
        loading: false,
        submitted: true
      }));
    }, 1500);
    
    // In a real implementation, you would send the form data to your backend or email service
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formState),
    // });
  };

  if (formState.submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="card bg-white shadow-lg border border-gray-100 p-8 md:p-10 max-w-3xl mx-auto text-center relative overflow-hidden rounded-xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent"></div>
        
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 flex justify-center mb-6"
        >
          <div className="bg-[#202d3f]/10 rounded-full p-4 border border-[#202d3f]/20">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative z-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#202d3f]">Message Received!</h2>
          <p className="md:text-lg mb-8 text-gray-600">
            Thank you for reaching out! We're excited to explore how we can bring your vision to life. 
            <span className="block mt-2">
              Our team will contact you within 24 hours to schedule your <span className="font-semibold text-[#202d3f]">free consultation session</span>.
            </span>
          </p>
          
          <button 
            onClick={() => setFormState((prev) => ({ ...prev, submitted: false }))}
            className="btn bg-[#202d3f] text-white hover:bg-[#304764]"
          >
            <span className="flex items-center">
              Send Another Message
              <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 17 20 12 15 7"></polyline>
                <path d="M4 12h16"></path>
              </svg>
            </span>
          </button>
        </motion.div>
        
        {/* Animated elements in background */}
        <div className="absolute bottom-0 right-0 opacity-30 pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: 1, 
                opacity: 0.3,
                rotate: 360
              }}
              transition={{ 
                duration: 10, 
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear" 
              }}
            />
          </svg>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#202d3f]">Let's Create Together</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us about your project and we'll provide a free consultation session to identify exactly what you need.
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="card bg-white shadow-lg border border-gray-100 p-8 md:p-10 space-y-6 rounded-xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="grid md:grid-cols-2 gap-8">
          <div>
            <FloatingInput
              type="text"
              id="name"
              name="name"
              label="Name"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="Your name"
            />
          </div>
          
          <div>
            <FloatingInput
              type="email"
              id="email"
              name="email"
              label="Email"
              required
              value={formState.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <FloatingInput
              type="tel"
              id="phone"
              name="phone"
              label="Phone Number"
              value={formState.phone}
              onChange={handleChange}
              placeholder="Your phone number (optional)"
            />
          </div>
          
          <div>
            <FloatingInput
              type="text"
              id="company"
              name="company"
              label="Company"
              value={formState.company}
              onChange={handleChange}
              placeholder="Your company name (optional)"
            />
          </div>
          
          <div className="md:col-span-2">
            <ServiceSelect 
              selectedService={formState.service} 
              onChange={handleServiceChange} 
            />
          </div>
          
          <div>
            <FloatingSelect
              id="timeline"
              name="timeline"
              label="Project Timeline"
              required
              value={formState.timeline}
              onChange={handleChange}
              options={[
                { value: "Urgent (1-2 weeks)", label: "Urgent (1-2 weeks)" },
                { value: "Standard (1-2 months)", label: "Standard (1-2 months)" },
                { value: "Flexible (3+ months)", label: "Flexible (3+ months)" }
              ]}
            />
          </div>
          
          <div>
            <FloatingSelect
              id="budget"
              name="budget"
              label="Budget Range"
              required
              value={formState.budget}
              onChange={handleChange}
              options={[
                { value: "Under $1,000", label: "Under $1,000" },
                { value: "$1,000 - $5,000", label: "$1,000 - $5,000" },
                { value: "$5,000 - $10,000", label: "$5,000 - $10,000" },
                { value: "$10,000+", label: "$10,000+" }
              ]}
            />
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <FloatingInput
            type="textarea"
            id="message"
            name="message"
            label="Project Details"
            required
            value={formState.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your project and what you're looking to achieve..."
          />
        </motion.div>
        
        <motion.div 
          className="pt-6 flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="text-sm opacity-80 text-center md:text-left">
            <p>After submission, we'll contact you to schedule your <span className="font-semibold">free consultation session</span>.</p>
          </div>
          
          <button
            type="submit"
            disabled={formState.loading}
            className="btn bg-[#202d3f] text-white hover:bg-[#304764] whitespace-nowrap"
          >
            {formState.loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              <span className="flex items-center">
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            )}
          </button>
        </motion.div>
      </form>
      
      <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
          <p className="opacity-80">
            Our collaborative approach focuses on understanding your unique needs to deliver exceptional results that exceed expectations.
          </p>
        </div>
        
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold mb-2">Free Consultation</h3>
          <p className="opacity-80">
            Every project starts with a complimentary discovery session to identify exactly what you need to succeed.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactForm;