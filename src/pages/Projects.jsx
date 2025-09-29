"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, Calendar, Tag, Search } from "lucide-react";

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    // {
    //   id: 1,
    //   title: "Student Management System",
    //   description: "A web app for managing student data and academic records.",
    //   longDescription:
    //     "This system allows admin users to manage students, courses, grades, and related information. Built as a CRUD-based application with a clean UI.",
    //   image: "/student-management.jpg",
    //   technologies: ["HTML", "CSS", "JavaScript"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   category: "Academic Project",
    //   date: "2024-06-15",
    //   featured: true,
    // },

    {
      id: 2,
      title: "Green Earth Infrastructure",
      description:
        "A business website for an infrastructure company, showcasing services and portfolio.",
      longDescription:
        "A responsive business website built with modern JavaScript and HTML/CSS, designed to showcase the services, projects, and contact details for Green Earth Infrastructure. It includes a project gallery, inquiry form, and SEO-optimized structure.",
      image: "/images/113.png",
      liveUrl: "https://www.greenearthinfrastructure.com/",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/Jatin-Purohit/green-earth-infrastructure",
      category: "Client Project",
      date: "2024-09-01",
      featured: false,
    },
    {
      id: 3,
      title: "Digital Marketing Website",
      description:
        "A marketing agency website designed for lead generation and branding.",
      longDescription:
        "This project is a professional website built for a digital marketing firm, focusing on service promotion, lead capture, and responsive design. The UI is built using JavaScript and styled with clean, modern CSS layouts.",
      image: "/images/114.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://digital-marketing-website-sepia.vercel.app/",
      githubUrl: "https://github.com/Jatin-Purohit/Digital-Marketing-Website",
      category: "Client Project",
      date: "2024-09-01",
      featured: false,
    },

    {
      id: 4,
      title: "Mahavir Surgical & Chemicals",
      description:
        "A corporate website for a surgical and chemical supply business.",
      longDescription:
        "This is a business website created to represent a supplier of surgical and chemical products. It includes service listings, company background, and inquiry forms. Built with HTML, CSS, and vanilla JavaScript.",
      image: "/images/115.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://mahavir-surgical-and-chemiclas.vercel.app/",
      githubUrl:
        "https://github.com/Jatin-Purohit/mahavir-surgical-and-chemiclas",
      category: "Client Project",
      date: "2024-08-04",
      featured: true,
    },
    {
      id: 5,
      title: "Jatin's Portfolio",
      description:
        "My personal portfolio website showcasing skills and projects.",
      longDescription:
        "A clean and professional portfolio site to highlight my front-end development skills, resume, and key projects. Built with responsive design in mind.",
      image: "/images/112.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      liveUrl: "https://portfolio-green-six-75.vercel.app/",
      githubUrl: "https://github.com/Jatin-Purohit/Jatin-sPortfolio",
      category: "Personal Project",
      date: "2024-07-28",
      featured: true,
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredProjects = projects.filter((project) => project.featured);

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
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A comprehensive collection of my work, showcasing various
            technologies and creative solutions
          </p>
        </div>

        {/* Search and Filter */}
        <div
          className={`mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 glass dark:glass-dark rounded-full border-0 focus:ring-2 focus:ring-blue-500 transition-all duration-200 neumorphism dark:neumorphism-dark"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "glass dark:glass-dark hover:scale-105 neumorphism dark:neumorphism-dark"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Projects */}
        {selectedCategory === "All" && searchTerm === "" && (
          <div
            className={`mb-16 transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white flex items-center">
              <Tag className="w-8 h-8 mr-3 text-blue-600" />
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredProjects.slice(0, 4).map((project, index) => (
                <div
                  key={project.id}
                  className="glass dark:glass-dark rounded-2xl overflow-hidden neumorphism dark:neumorphism-dark hover:scale-105 transform transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full">
                        {project.category}
                      </span>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(project.date).toLocaleDateString()}
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-4">
                      <a
                        href={project.liveUrl}
                        target="blank"
                        className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:scale-105 transform transition-all duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-2 px-4 py-2 glass dark:glass-dark rounded-lg font-medium hover:scale-105 transform transition-all duration-200 text-sm neumorphism dark:neumorphism-dark"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Projects */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
            All Projects ({filteredProjects.length})
          </h2>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Try adjusting your search terms or filters
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="glass dark:glass-dark rounded-2xl overflow-hidden neumorphism dark:neumorphism-dark hover:scale-105 transform transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold rounded-full">
                          FEATURED
                        </span>
                      </div>
                    )}
                    <div className="absolute top-3 right-3">
                      <span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 mr-1" />
                        {new Date(project.date).toLocaleDateString()}
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={project.liveUrl}
                        className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Demo</span>
                      </a>
                      <a
                        href={project.githubUrl}
                        className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200 text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
