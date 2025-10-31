import { ExternalLink, Github, Globe } from 'lucide-react';
import loanAppImage from '@/assets/loanapp-project.png';
import eatSmartImage from '@/assets/eatsmart-project.png';

const Projects = () => {
  const projects = [
    {
      title: "Loan Application Management System",
      description: "A comprehensive loan management platform with secure authentication, multi-step application forms, and dynamic comparison tools. Features an interactive dashboard for loan tracking and Firebase integration for seamless data management.",
      technologies: ["React.js", "Firebase", "Chakra UI", "Vercel"],
      liveUrl: "https://loan-app-cyan.vercel.app/",
      githubUrl: "https://github.com/vibhutisharma0408/loan-management-system",
      features: [
        "Secure authentication system",
        "Multi-step loan application form",
        "Dynamic loan comparison tool", 
        "Interactive dashboard with analytics",
        "Firebase Storage integration",
        "Responsive design across all devices"
      ],
      image: loanAppImage
    },
    {
      title: "EatSmart – AI-Powered Health & Nutrition Assistant",
      description: "An AI-driven nutrition assistant that provides personalized meal plans, real-time health tips, and expert guidance through a conversational interface. Built with React, Tailwind CSS, Firebase, and Framer Motion, ensuring a responsive and engaging user experience.",
      technologies: ["React.js", "Tailwind CSS", "Firebase", "Framer Motion", "AI APIs", "Vercel"],
      liveUrl: "https://eat-smart-rouge.vercel.app/",
      githubUrl: "https://github.com/vibhutisharma0408/EatSmart",
      features: [
        "AI-powered personalized meal plans",
        "Real-time health tips and guidance",
        "Conversational interface for expert advice",
        "Integration with nutrition APIs",
        "Track wellness journey effectively",
        "Customized recommendations based on user goals"
      ],
      image: eatSmartImage
    }
  ];

  return (
    <section id="projects" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcasing real-world applications built with modern web technologies
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="animate-fade-in-up">
              <div className="portfolio-card group">
                <div className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={project.image} 
                        alt={`${project.title} screenshot`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-gradient transition-colors duration-200">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-primary">Key Features:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="skill-tag text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-button-hero flex items-center justify-center gap-2 text-center"
                      >
                        <ExternalLink size={18} />
                        View Live Project
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-button-secondary flex items-center justify-center gap-2 text-center"
                      >
                        <Github size={18} />
                        View Source Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="portfolio-card inline-block max-w-2xl">
            <h3 className="text-xl font-semibold mb-4 text-gradient">More Projects Coming Soon</h3>
            <p className="text-muted-foreground">
              I'm continuously working on new projects to expand my portfolio. Each project represents 
              a learning opportunity where I explore new technologies and solve real-world problems. 
              Check back soon for more exciting developments!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;