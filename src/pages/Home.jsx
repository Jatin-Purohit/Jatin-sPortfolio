import HeroSection from "../components/HeroSection";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutMe />
      <Skills />
      <Projects />
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's work together to create
              something amazing.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Home;
