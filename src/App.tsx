import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Briefcase, 
  GraduationCap,
  ChevronDown,
  Star,
  Zap,
  Shield,
  Rocket
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const projects = [
    {
      title: "Pokelyzer - (API takes about a minute to spin up if cold)",
      description: "A custom API driven service that scrapes historical data of pokemon cards and uses Facebook's Prophet to predict a 6 month timeline of how the prices are going to move. This data is also used to give suggestions of actions to take with passed cards.",
      tech: ["Python, Pydantic, FastAPI, Supabase,"],
      github: "https://github.com/Yellowjersey/Pokelyzer",
      live: "https://pokelyzer-frontend.netlify.app/",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "GetMovies",
      description: "A comprehensive movie discovery application built with modern React patterns. Features advanced search, filtering, and detailed movie information with a sleek, responsive interface.",
      tech: ["React", "JavaScript", "API Integration", "Responsive Design"],
      github: "https://github.com/Yellowjersey/GetMovies",
      live: "https://gbradford-getmovies.netlify.app/",
      gradient: "from-purple-500 to-pink-500"
    },
    // {
    //   title: "E-Commerce Platform",
    //   description: "Full-stack e-commerce solution with Next.js, featuring user authentication, payment processing, and admin dashboard. Optimized for performance and SEO.",
    //   tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    //   github: "#",
    //   live: "#",
    //   gradient: "from-blue-500 to-cyan-500"
    // },
    // {
    //   title: "Task Management App",
    //   description: "Collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern React patterns.",
    //   tech: ["React", "TypeScript", "Socket.io", "Node.js", "MongoDB"],
    //   github: "#",
    //   live: "#",
    //   gradient: "from-green-500 to-teal-500"
    // }
  ];

const skills = [
  { name: "Python", level: 95, icon: <Code className="w-5 h-5" /> },
  { name: "FastAPI", level: 90, icon: <Rocket className="w-5 h-5" /> },
  { name: "Pandas/Prophet", level: 85, icon: <Zap className="w-5 h-5" /> },
  { name: "Data Scraping", level: 90, icon: <Star className="w-5 h-5" /> },
  { name: "Automation", level: 90, icon: <Shield className="w-5 h-5" /> },
  { name: "Security Engineering", level: 85, icon: <Briefcase className="w-5 h-5" /> },
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              GB
            </div>
            <div className="hidden md:flex space-x-8">
              {['hero', 'about', 'projects', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-colors duration-300 ${
                    activeSection === section
                      ? 'text-purple-400'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {section === 'hero' ? 'Home' : section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Gavin Bradford
                </span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-white/90 mb-6 font-light">
                Python Developer | Automation & Security Engineering
              </h2>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                I specialize in building Python-based microservices, APIs, automation tools, and data pipelines — combining practical software engineering with real-world security insights.
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src="/gavin.jpg"
                  alt="Gavin Bradford"
                  className="relative z-10 w-80 h-80 lg:w-96 lg:h-96 rounded-full object-cover mx-auto border-4 border-white/20 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A dedicated Python developer and security engineer focused on creating robust, secure, and efficient backend services.
              I leverage Python for automation, data scraping, forecasting, and security tooling — connecting my software engineering skills with my security background.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="text-purple-400 font-semibold">Master's in Cybersecurity</p>
                  <p className="text-white/70">Advanced security principles & practices</p>
                </div>
                <div>
                  <p className="text-purple-400 font-semibold">Bachelor's in Software Engineering</p>
                  <p className="text-white/70">Full-stack development foundation</p>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Expertise</h3>
              <div className="space-y-2">
              <p className="text-white/70">• Python Automation & Tooling</p>
              <p className="text-white/70">• API Development (FastAPI, Flask)</p>
              <p className="text-white/70">• Data Scraping & Pipelines</p>
              <p className="text-white/70">• Security Automation</p>
              <p className="text-white/70">• Cloud-Connected Workflows</p>

              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
              <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Focus</h3>
              <div className="space-y-2">
                <p className="text-white/70">• Secure Coding Practices</p>
                <p className="text-white/70">• Authentication Systems</p>
                <p className="text-white/70">• Data Protection</p>
                <p className="text-white/70">• Vulnerability Assessment</p>
                <p className="text-white/70">• Best Practices Implementation</p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Technical Skills</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-purple-400">{skill.icon}</div>
                      <span className="text-white font-semibold">{skill.name}</span>
                    </div>
                    <span className="text-white/70">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A showcase of my recent Python work, highlighting automation, data scraping, secure API design, and real-world prediction services.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group bg-white/5 backdrop-blur-lg rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-white/70 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-white/70 hover:text-purple-400 transition-colors duration-300"
                    >
                      <Github className="w-5 h-5" />
                      <span>Code</span>
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-white/70 hover:text-purple-400 transition-colors duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-white/70 mb-6">
              Currently seeking new opportunities as a Python developer — let’s connect and discuss how I can bring robust automation and backend expertise to your team.
            </p>

          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <div className="grid md:grid-cols-3 gap-8">
                <a
                  href="mailto:gavin.bradford@example.com"
                  className="group flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-purple-500/20 transition-all duration-300 border border-white/10 hover:border-purple-500/50"
                >
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
                  <p className="text-white/70 text-center">bradfordgavin@gmail.com</p>
                </a>

                <a
                  href="https://www.linkedin.com/in/gavin-bradford-ab2566123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-blue-500/20 transition-all duration-300 border border-white/10 hover:border-blue-500/50"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Linkedin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
                  <p className="text-white/70 text-center">Connect with me</p>
                </a>

                <a
                  href="https://github.com/Yellowjersey"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-col items-center p-6 rounded-xl bg-white/5 hover:bg-green-500/20 transition-all duration-300 border border-white/10 hover:border-green-500/50"
                >
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
                  <p className="text-white/70 text-center">View my code</p>
                </a>
              </div>

              <div className="mt-12 text-center">
                <p className="text-white/70 mb-6">
                  Currently seeking new opportunities in React/Next.js development. 
                  Let's discuss how I can contribute to your team's success.
                </p>
                <button
                  onClick={() => window.open('mailto:bradfordgavin@gmail.com', '_blank')}
                  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Start a Conversation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/50">
              © 2025 Gavin Bradford. Built with React, TypeScript, and Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;