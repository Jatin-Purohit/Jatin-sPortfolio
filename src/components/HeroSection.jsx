"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden mt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-300/20 dark:bg-indigo-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-300/20 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-blue-300/20 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <div
            className={`mb-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-300/30 dark:border-gray-600/50 p-1 shadow-2xl">
                <img
                  src="/images/me.jpg?height=160&width=160"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-900 animate-pulse"></div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className={`transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Jatin Sharma
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
              Software Developer
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2">
              Detail-oriented and adaptable software developer with hands-on
              experience in front-end development, Zoho application development,
              and full-stack web technologies.
            </p>
            <p className="text-base text-gray-500 dark:text-gray-500 mb-8 flex items-center justify-center">
              <span className="text-indigo-600 mr-2">📍</span>
              Hamirpur, Himachal Pradesh
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg text-gray-700 dark:text-gray-300">
              Download CV
            </button>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center space-x-6 mb-12 transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {[
              {
                icon: Github,
                href: "https://github.com/Jatin-Purohit",
                label: "GitHub",
              },
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/jatin-purohit81/",
                label: "LinkedIn",
              },
              {
                icon: Mail,
                href: "mailto:jatin03purohit@gmail.com",
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-full hover:scale-110 transform transition-all duration-200 shadow-lg group"
                aria-label={label}
              >
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200" />
              </a>
            ))}
          </div>

          {/* Scroll Indicator */}
          <button
            onClick={scrollToNext}
            className="animate-bounce p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-300 dark:border-gray-600 hover:scale-110 transform transition-all duration-200 shadow-lg"
          >
            <ChevronDown className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
