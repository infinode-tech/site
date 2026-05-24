import React from "react";
import { motion } from "framer-motion";
import AnimatedShapes from "./ui/animated-shapes";
import ContactForm from "./Forms/ContactForm";
import ContactFeatures from "./ui/contact-features";

function Contact() {
  return (
    <div
      id="contact"
      className="relative bg-white min-h-screen w-screen flex items-center justify-center lg:px-20 md:px-10 px-5 overflow-hidden text-[#202d3f] py-16"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.03)]"></div>
        <div className="wave opacity-40"></div>
        <div className="wave opacity-30"></div>
        <div className="wave opacity-20"></div>
        <AnimatedShapes />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto py-8">
        <ContactForm />
        
        <ContactFeatures />

        <div className="mt-16 md:mt-12 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-8 items-center"
          >
            <p className="text-white/80 font-medium">Prefer direct contact?</p>
            <a
              className="flex items-center gap-3 text-[#202d3f] hover:text-[#304764] transition group"
              href="mailto:hello@infinode.tech"
            >
              <div className="p-2 rounded-full bg-[#202d3f]/10 group-hover:bg-[#202d3f]/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </div>
              hello@infinode.tech
            </a>
            <a
              className="flex items-center gap-3 text-[#202d3f] hover:text-[#304764] transition group"
              href="tel:+9609570737"
            >
              <div className="p-2 rounded-full bg-[#202d3f]/10 group-hover:bg-[#202d3f]/20 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              +960 9570737
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;