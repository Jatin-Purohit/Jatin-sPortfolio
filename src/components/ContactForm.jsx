"use client";

import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "jatin03purohit@gmail.com",
      href: "mailto:jatin03purohit@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 (765) 007-2130",
      href: "tel:+917650072130",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Himachal Pradesh, India",
      href: "#",
    },
  ];

  if (isSubmitted) {
    return (
      <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Message Sent Successfully!
        </h3>
        <p className="text-gray-600 dark:text-gray-300">
          Thank you for reaching out. I'll get back to you soon!
        </p>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      {/* Contact Information */}
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Let's Connect
          </h3>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I'm always interested in hearing about new opportunities and
            exciting projects. Whether you have a question or just want to say
            hi, feel free to reach out!
          </p>
        </div>

        <div className="space-y-6">
          {contactInfo.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center space-x-4 p-4 glass dark:glass-dark rounded-xl neumorphism dark:neumorphism-dark hover:scale-105 transform transition-all duration-200 group"
            >
              <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {label}
                </div>
                <div className="text-gray-800 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                  {value}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Contact Form */}
      <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Subject *
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm"
              placeholder="What's this about?"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 backdrop-blur-sm resize-none"
              placeholder="Tell me about your project or just say hello!"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center space-x-2"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
