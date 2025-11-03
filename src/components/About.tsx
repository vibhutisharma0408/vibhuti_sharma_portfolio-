import { GraduationCap, Code, Target, BookOpen, Download, Github, Linkedin } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Education",
      description: "B.Tech in Information Technology from SSIPMT Raipur (2024)"
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Current Learning",
      description: "Full Stack Development at Masai School"
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Specialization",
      description: "MERN Stack & Full Stack Web Development"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Career Goal",
      description: "Software Developer & Web Development Expert"
    }
  ];

  return (
    <section id="about" className="section-padding bg-background-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I’m a JavaScript-first developer who enjoys turning requirements into fast, clean, and usable products. I ship React frontends, wire APIs, and deploy reliably with modern tooling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="portfolio-card">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  B.Tech in IT (SSIPMT Raipur, 2024). I’m currently sharpening full‑stack skills at Masai and building projects that emphasize performance, accessibility, and clear UX.
                </p>

                <p>
                  Recent work includes an AI‑powered nutrition assistant and a loan management platform with auth, multi‑step forms, dashboards, and Firebase. I like working end‑to‑end: components, state, APIs, and deployment.
                </p>
                <p>
                  Open to roles where I can build real features, iterate with feedback, and own outcomes.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href={`${import.meta.env.BASE_URL}Vibhuti-Sharma-Resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Vibhuti-Sharma-Resume.pdf"
                  className="portfolio-button-hero flex items-center gap-2"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <a
                  href="https://github.com/vibhutisharma0408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-button flex items-center gap-2"
                >
                  <Github size={20} />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vibhuti-sharma-1280b7215/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-button flex items-center gap-2"
                >
                  <Linkedin size={20} />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          <div className="animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="portfolio-card group">
                  <div className="text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </div>
                  <h4 className="text-lg font-semibold mb-2 text-foreground">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;