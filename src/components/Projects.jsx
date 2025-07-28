"use client";

import { useState, useEffect } from "react";
import { ExternalLink, Github, Eye, X } from "lucide-react";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("projects-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Spotify Website Clone",
      description:
        "Interactive music streaming interface with Spotify API integration and curated playlists",
      longDescription:
        "Developed an interactive user interface for seamless navigation and an enhanced user experience. Integrated Spotify API to access music data and functionalities within the app. Demonstrated proficiency in front-end technologies and a passion for creating engaging web applications. Customised the app by adding a curated list of favourite songs, showcasing a keen understanding of user preferences.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Spotify API",
        "Responsive Design",
      ],
      liveUrl: "#",
      githubUrl: "#", // Add your actual GitHub repository link
      category: "Frontend",
      featured: true,
    },
    {
      id: 2,
      title: "Windows 11 Simulation",
      description:
        "Dynamic, interactive Windows 11 operating system simulation with authentic UI/UX",
      longDescription:
        "Developed a dynamic, interactive Windows 11 operating system simulation using HTML, CSS, and JavaScript, demonstrating profound knowledge in front-end development and user interface design. Implemented key features such as the start menu, taskbar, system settings, and file explorer, focusing on mirroring the look and feel of Windows 11 to provide an immersive user experience.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "UI/UX Design",
        "DOM Manipulation",
      ],
      liveUrl: "#",
      githubUrl: "#", // Add your actual GitHub repository link
      category: "Frontend",
      featured: true,
    },
    {
      id: 3,
      title: "Flipkart Website Clone",
      description:
        "Full-scale replica of the Flipkart e-commerce website with responsive design",
      longDescription:
        "Developed a full-scale replica of the Flipkart e-commerce website using HTML and CSS. I have demonstrated proficiency in front-end development by closely mimicking the original website's layout, styling, and functionality. The project showcases attention to detail in recreating complex layouts, product grids, navigation systems, and responsive design principles.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: [
        "HTML",
        "CSS",
        "Responsive Design",
        "Flexbox",
        "Grid Layout",
      ],
      liveUrl: "#",
      githubUrl: "#", // Add your actual GitHub repository link
      category: "Frontend",
      featured: true,
    },
    {
      id: 4,
      title: "Zoho CRM Applications",
      description:
        "Custom enterprise applications and automation using Zoho Creator and CRM",
      longDescription:
        "Developed and customized applications using Zoho Creator and Zoho CRM during my internship at Zonexity. Collaborated on internal tools and automation to improve workflow efficiency. Gained practical experience in cloud software and enterprise-level development. Created custom workflows, automated business processes, and integrated various Zoho applications to streamline operations.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: [
        "Zoho Creator",
        "Zoho CRM",
        "Automation",
        "Cloud Computing",
        "Workflow Design",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Backend",
      featured: false,
    },
    {
      id: 5,
      title: "AiMantra Web Interfaces",
      description:
        "Responsive web interfaces using Next.js, Tailwind CSS, and modern web technologies",
      longDescription:
        "Built responsive and engaging web interfaces using Next.js, Tailwind CSS, CSS and JavaScript at AiMantra. Collaborated with design and backend teams to create seamless user experiences. Improved website performance and contributed to UI/UX enhancements. Worked on multiple client projects, implementing modern design patterns and ensuring cross-browser compatibility.",
      image: "/placeholder.svg?height=300&width=400",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX",
        "Performance Optimization",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Full Stack",
      featured: false,
    },
  ];

  const categories = ["All", "Full Stack", "Frontend", "Backend"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="projects-section" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my development work, from web applications to
            enterprise solutions
          </p>
        </div>

        {/* Category Filter */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                  : "bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:scale-105 shadow-lg text-gray-700 dark:text-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden shadow-xl hover:scale-105 transform transition-all duration-300 group ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-bold rounded-full">
                      FEATURED
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button
                    onClick={() => openModal(project)}
                    className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors duration-200"
                  >
                    <Eye className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-300 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-sm">Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div
          className={`text-center mt-12 transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Projects
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover rounded-t-2xl"
              />
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {selectedProject.longDescription}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 text-indigo-800 dark:text-indigo-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-4">
                <a
                  href={selectedProject.liveUrl}
                  className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-medium hover:scale-105 transform transition-all duration-200"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={selectedProject.githubUrl}
                  className="flex items-center space-x-2 px-6 py-3 bg-white/90 dark:bg-gray-700/90 backdrop-blur-sm border border-gray-200 dark:border-gray-600 rounded-full font-medium hover:scale-105 transform transition-all duration-200 text-gray-700 dark:text-gray-300"
                >
                  <Github className="w-5 h-5" />
                  <span>View Code</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
