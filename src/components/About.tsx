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
            Passionate about crafting innovative web solutions and continuously evolving in the tech landscape. Skilled in building responsive and dynamic web applications using modern technologies like MERN stack, Firebase, and Tailwind CSS. Experienced in integrating APIs, managing state, and deploying full-stack projects. Dedicated to creating seamless user experiences and delivering impactful digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <div className="portfolio-card">
              <h3 className="text-2xl font-semibold mb-6 text-gradient">My Journey</h3>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  I'm Vibhuti Sharma, a B.Tech graduate in Information Technology from SSIPMT Raipur (2024). 
                  My journey in technology began with a curiosity about how digital solutions can transform ideas into reality, 
                  leading me to pursue full-stack development with dedication and enthusiasm.
                </p>
                
                <p>
                  Currently, I'm expanding my expertise through a comprehensive Full Stack Development program at Masai School, 
                  where I'm mastering the MERN stack and modern web development practices. This intensive learning experience 
                  has equipped me with both theoretical knowledge and hands-on experience in building scalable applications.
                  My professional experience includes roles at NoBroker Technology and Squareyard, where I developed strong 
                  problem-solving skills and client management capabilities.
                </p>
                
                <p>
                  I'm actively seeking opportunities as a <strong className="text-primary">MERN Stack Developer</strong> or 
                  <strong className="text-primary"> Full Stack Web Developer</strong> where I can contribute to meaningful 
                  projects while continuing to grow professionally. My goal is to create user-centric applications that 
                  solve real-world problems efficiently.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-8">
                <a
                  href="/Vibhuti_Sharma_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download="Vibhuti_Sharma_Resume.pdf"
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