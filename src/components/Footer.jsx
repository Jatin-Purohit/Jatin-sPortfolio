"use client";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Jatin-Purohit", label: "GitHub" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/jatin-purohit81/",
      label: "LinkedIn",
    },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  const quickLinks = [
    { name: "Home", href: "#" },
    // { name: "About", href: "#about" },
    // { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-slate-800 to-gray-900 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-400 to-gray-400 bg-clip-text text-transparent">
              Jatin Purohit
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Software Developer passionate about creating beautiful,
              functional, and user-centered digital experiences with modern web
              technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer" // Prevent security issues
                  className="p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full hover:scale-110 transform transition-all duration-200 group hover:bg-slate-600/20"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 text-gray-300 group-hover:text-slate-400 transition-colors duration-200" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-400">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-slate-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-400">
              Get In Touch
            </h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>Hamirpur, Himachal Pradesh</p>
              <p>jatin03purohit@gmail.com</p>
              <p>Available for opportunities</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-sm text-gray-300 mb-4 md:mb-0">
            <span>© {new Date().getFullYear()} Jatin Purohit. Made with</span>
            <Heart className="w-4 h-4 text-slate-500 animate-pulse" />
            <span>and lots of code</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-gray-800/80 backdrop-blur-sm border border-gray-700/50 rounded-full hover:scale-110 transform transition-all duration-200 group hover:bg-slate-600/20"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-slate-400 transition-colors duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
