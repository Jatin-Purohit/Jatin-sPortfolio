"use client";

import { useState, useEffect } from "react";
import { Calendar, MapPin, Coffee, Code, Heart, Award } from "lucide-react";

const AboutMe = () => {
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

    const element = document.getElementById("about-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const timeline = [
    {
      year: "2025",
      title: "Front-End Developer",
      company: "AiMantra",
      description:
        "Built responsive and engaging web interfaces using Next.js, Tailwind CSS, CSS and JavaScript. Collaborated with design and backend teams to create seamless user experiences.",
      type: "work",
    },

    {
      year: "2024",
      title: "Intern – Zoho Developer & Software Developer",
      company: "Zonexity | Duration: 3 months",
      description:
        "Developed and customized applications using Zoho Creator and Zoho CRM. Collaborated on internal tools and automation to improve workflow efficiency.",
      type: "work",
    },
    {
      year: "2024",
      title: "B.TECH (Information Technology)",
      company: "UIT, HPU Shimla",
      description:
        "Graduated with 8.6 CGPA, specializing in Information Technology with focus on software development and web technologies.",
      type: "education",
    },
    {
      year: "2020",
      title: "XII (Higher Secondary)",
      company: "Govt. School, H.P Board",
      description:
        "Completed XII with 79% marks, building foundation in science and mathematics.",
      type: "education",
    },
    {
      year: "2018",
      title: "X (Secondary)",
      company: "Govt. School, H.P Board",
      description:
        "Completed X with 84% marks, demonstrating consistent academic excellence.",
      type: "education",
    },
  ];

  const stats = [
    { icon: Code, label: "Projects Completed", value: "5+" },
    { icon: Coffee, label: "Months Experience", value: "6+" },
    { icon: Heart, label: "Technologies", value: "10+" },
    { icon: Award, label: "CGPA", value: "8.6" },
  ];

  const achievements = [
    "Won badminton doubles competition at college sports meet",
    "Second place in badminton singles category",
    "Member of Electronics and Telecommunication Student's Association",
    "Vice President of Hamirpur Student's Welfare Association",
    "Organized blood donation camp at university",
    "Head Coordinator of College Fest",
  ];

  return (
    <section id="about-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate developer with expertise in modern web technologies and
            enterprise solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Info */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Get to know me
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I'm a detail-oriented and adaptable software developer with
                hands-on experience in front-end development, Zoho application
                development, and full-stack web technologies. I have proven
                ability to build responsive user interfaces, integrate APIs, and
                collaborate effectively in team environments.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                Recently graduated with a B.Tech in Information Technology from
                UIT, HPU Shimla with 8.6 CGPA. I'm passionate about creating
                engaging web applications and solving complex problems through
                code.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-indigo-600" />
                  <span>Hamirpur, Himachal Pradesh</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4 text-indigo-600" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }, index) => (
                <div
                  key={label}
                  className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 text-center shadow-xl hover:scale-105 transform transition-all duration-200"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-indigo-600 dark:text-indigo-400" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div
          className={`mb-16 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">
            Achievements & Leadership
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-800/50 dark:to-gray-700/50 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-lg hover:scale-105 transform transition-all duration-200"
              >
                <div className="flex items-start space-x-3">
                  <Award className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mt-1 flex-shrink-0" />
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div
          className={`transform transition-all duration-1000 delay-800 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            My Journey
          </h3>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                  }`}
                >
                  <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-xl hover:scale-105 transform transition-all duration-200">
                    <div className="flex items-center justify-between mb-2">
                      <div
                        className={`text-indigo-600 dark:text-indigo-400 font-bold text-lg ${
                          index % 2 === 0 ? "order-2" : "order-1"
                        }`}
                      >
                        {item.year}
                      </div>
                      <div
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          item.type === "education"
                            ? "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                            : "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                        } ${index % 2 === 0 ? "order-1" : "order-2"}`}
                      >
                        {item.type === "education" ? "Education" : "Work"}
                      </div>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <div className="text-indigo-600 dark:text-indigo-400 font-medium mb-2">
                      {item.company}
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white dark:border-gray-900"></div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
