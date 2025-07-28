"use client";

import { useState, useEffect } from "react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C/C++", level: 85, color: "from-blue-600 to-indigo-700" },
        {
          name: "JavaScript",
          level: 90,
          color: "from-yellow-500 to-orange-600",
        },
        { name: "HTML", level: 95, color: "from-orange-600 to-red-600" },
        { name: "CSS", level: 90, color: "from-blue-500 to-cyan-600" },
      ],
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "React.js", level: 85, color: "from-cyan-500 to-blue-600" },
        { name: "Next.js", level: 80, color: "from-gray-700 to-gray-900" },
        {
          name: "Tailwind CSS",
          level: 90,
          color: "from-teal-500 to-green-600",
        },
        { name: "GitHub", level: 85, color: "from-gray-700 to-gray-900" },
      ],
    },
    {
      title: "Other Skills & Tools",
      skills: [
        { name: "Zoho Creator", level: 80, color: "from-red-600 to-pink-700" },
        { name: "Zoho CRM", level: 75, color: "from-red-500 to-red-700" },
        {
          name: "Problem Solving",
          level: 90,
          color: "from-purple-600 to-violet-700",
        },
        {
          name: "Team Collaboration",
          level: 85,
          color: "from-indigo-600 to-purple-700",
        },
      ],
    },
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Next.js", icon: "▲" },
    { name: "JavaScript", icon: "🟨" },
    { name: "C++", icon: "🔷" },
    { name: "HTML", icon: "🌐" },
    { name: "CSS", icon: "🎨" },
    { name: "Tailwind", icon: "💨" },
    { name: "GitHub", icon: "📝" },
    { name: "Zoho", icon: "🔧" },
    { name: "Problem Solving", icon: "🧩" },
  ];

  const languages = [
    { name: "Hindi", level: "Professional", flag: "🇮🇳" },
    { name: "English", level: "Professional", flag: "🇬🇧" },
    { name: "Punjabi", level: "Conversational", flag: "🗣️" },
  ];

  const certificates = [
    "Full Stack Web Development - Udemy",
    "NCC A Certificate",
    "AUTOMOBILE 4 Level Certificate",
  ];

  return (
    <section id="skills-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            My technical expertise and proficiency levels across different
            technologies
          </p>
        </div>

        {/* Technology Icons */}
        <div
          className={`mb-16 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-xl hover:scale-110 transform transition-all duration-200 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl mb-2 group-hover:scale-125 transform transition-transform duration-200">
                  {tech.icon}
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${(categoryIndex + 1) * 200}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transform transition-all duration-1000 ease-out`}
                        style={{
                          width: isVisible ? `${skill.level}%` : "0%",
                          transitionDelay: `${
                            categoryIndex * 200 + skillIndex * 100
                          }ms`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Languages and Certificates */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages */}
          <div
            className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl transform transition-all duration-1000 delay-600 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Languages
            </h3>
            <div className="space-y-4">
              {languages.map((lang, index) => (
                <div
                  key={lang.name}
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{lang.flag}</span>
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {lang.name}
                    </span>
                  </div>
                  <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {lang.level}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Certificates */}
          <div
            className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl transform transition-all duration-1000 delay-800 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white text-center">
              Certificates
            </h3>
            <div className="space-y-4">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-700/50 dark:to-gray-600/50 rounded-lg border border-gray-200 dark:border-gray-600"
                >
                  <span className="text-2xl">🏆</span>
                  <span className="text-gray-700 dark:text-gray-300">
                    {cert}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
