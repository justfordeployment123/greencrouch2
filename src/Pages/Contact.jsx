import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
});

const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
};

  const handleSubmit = (e) => {
    e.preventDefault();

    const SERVICE_ID = "service_2t6d06c";
    const TEMPLATE_ID = "template_1ggc63s";
    const PUBLIC_KEY = "hIaOnjZFtpaGgDmxN";

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      website: formData.website,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then((res) => {
        console.log("EmailJS SUCCESS:", res.status, res.text);
        setFormData({ name: "", email: "", website: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS FAILED:", err);
      });

    console.log("Form submitted:", formData);
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen px-4 py-16 sm:px-6 lg:px-8 sm:py-20">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="w-full max-w-2xl mx-auto"
      >
        {/* Heading */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="mb-8 text-center"
        >
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">
            <span className="text-[#319d0a] lowercase">Let's</span> talk
          </h2>
        </motion.div>

        {/* Form Card */}
        <motion.div
          variants={fadeUp}
          transition={{ duration: 0.7 }}
          className="overflow-hidden bg-white shadow-xl"
        >
          <div className="px-4 py-8 sm:px-10 sm:py-12">
            <div className="space-y-6">
              {/* Name + Email */}
              <motion.div
                variants={fadeUp}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tell us your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Enter your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full px-4 py-3 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </motion.div>

              {/* Website */}
              <motion.div variants={fadeUp}>
                <label
                  htmlFor="website"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Website
                </label>
                <div className="flex mt-1 rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 text-gray-500 bg-white border border-r-0 border-gray-300 rounded-l-md sm:text-sm">
                    http://
                  </span>
                  <input
                    type="url"
                    name="website"
                    id="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="flex-1 block w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-none rounded-r-md focus:ring-green-500 focus:border-green-500 sm:text-sm"
                    placeholder="www.example.com"
                  />
                </div>
              </motion.div>

              {/* Message */}
              <motion.div variants={fadeUp}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="block w-full px-4 py-3 mt-1 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </motion.div>

              {/* Submit */}
              <motion.div
                variants={fadeUp}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSubmit}
                  className="flex justify-center w-full px-6 py-3 text-base font-medium text-white transition-colors duration-300 border border-transparent shadow-sm sm:w-auto sm:px-8 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 rounded-md"
                >
                  SUBMIT
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default Contact;