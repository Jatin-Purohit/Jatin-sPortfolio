"use client";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* 404 Animation */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
          </div>

          {/* Error Message */}
          <div
            className={`mb-8 transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white">
              Oops! Page Not Found
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The page you're looking for seems to have wandered off into the
              digital void. Don't worry, even the best explorers sometimes take
              a wrong turn!
            </p>
          </div>

          {/* Illustration */}
          <div
            className={`mb-8 transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="glass dark:glass-dark rounded-2xl p-8 neumorphism dark:neumorphism-dark inline-block">
              <div className="text-6xl mb-4 animate-bounce">🚀</div>
              <p className="text-gray-600 dark:text-gray-300">
                Lost in space? Let's get you back on track!
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Home className="w-5 h-5" />
              <span>Go Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 px-8 py-3 glass dark:glass-dark rounded-full font-medium hover:scale-105 transform transition-all duration-200 neumorphism dark:neumorphism-dark"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Go Back</span>
            </button>
          </div>

          {/* Fun Facts */}
          <div
            className={`mt-12 transform transition-all duration-1000 delay-900 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="glass dark:glass-dark rounded-2xl p-6 neumorphism dark:neumorphism-dark max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold mb-3 text-gray-800 dark:text-white">
                Fun Fact About 404 Errors
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                The "404 Not Found" error code was named after room 404 at CERN,
                where the World Wide Web was born. The room housed the central
                database, and when it was moved, people kept looking for files
                in the old location!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
