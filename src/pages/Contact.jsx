"use client";

import { useState, useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { MapPin, Clock, Coffee } from "lucide-react";

const ContactPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's create
            something amazing together.
          </p>
        </div>

        {/* Quick Info Cards */}
        <div
          className={`grid md:grid-cols-3 gap-6 mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="glass dark:glass-dark rounded-2xl p-6 text-center neumorphism dark:neumorphism-dark hover:scale-105 transform transition-all duration-200">
            <MapPin className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Location
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Himachal Pradedsh, India
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Available for remote work
            </p>
          </div>

          <div className="glass dark:glass-dark rounded-2xl p-6 text-center neumorphism dark:neumorphism-dark hover:scale-105 transform transition-all duration-200">
            <Clock className="w-12 h-12 mx-auto mb-4 text-purple-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Response Time
            </h3>
            <p className="text-gray-600 dark:text-gray-300">Within 24 hours</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Usually much faster!
            </p>
          </div>

          <div className="glass dark:glass-dark rounded-2xl p-6 text-center neumorphism dark:neumorphism-dark hover:scale-105 transform transition-all duration-200">
            <Coffee className="w-12 h-12 mx-auto mb-4 text-orange-600" />
            <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">
              Coffee Chat
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Always up for a chat
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Virtual or in-person
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div
          className={`transform transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <ContactForm />
        </div>

        {/* Additional Info */}
        <div
          className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              What to Expect
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                  Quick Response
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  I'll get back to you within 24 hours with initial thoughts and
                  next steps.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">
                  Detailed Discussion
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We'll schedule a call to discuss your project requirements and
                  goals in detail.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">
                  Proposal & Timeline
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  You'll receive a comprehensive proposal with timeline and
                  pricing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
