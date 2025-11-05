import { ArrowDown, Download, ExternalLink } from 'lucide-react';
import profileImage from '@/assets/vibhuti-profile.png';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const resumeUrl = `${import.meta.env.BASE_URL}Vibhuti_Sharma_Resume%20(18).pdf`;
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = resumeUrl;
    window.open(url, '_blank', 'noopener,noreferrer');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Vibhuti_Sharma_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  return (
    <section id="home" className="min-h-[85vh] md:min-h-[75vh] lg:min-h-screen flex items-center justify-center bg-[var(--gradient-hero)]">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-20">
        <div className="text-center">
          <div className="mb-8 animate-fade-in">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <img
                src={profileImage}
                alt="Vibhuti Sharma - Full Stack Developer"
                className="w-full h-full rounded-full object-cover border-4 border-primary/30 shadow-[var(--shadow-card)] animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent"></div>
            </div>
          </div>

          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-foreground">Vibhuti</span>{' '}
              <span className="text-gradient">Sharma</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              I build reliable, fast, and clean web apps with React and the MERN stack.
            </p>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              B.Tech (IT) graduate, upskilling in Full‑Stack at Masai. Focused on performant UI, solid API integration, and smooth deployments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 md:mb-10 lg:mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="portfolio-button-hero flex items-center gap-2"
              >
                View My Work
                <ExternalLink size={20} />
              </button>
              
              <button
                onClick={() => scrollToSection('contact')}
                className="portfolio-button-outline flex items-center gap-2"
              >
                Hire Me / Contact
                <Download size={20} />
              </button>

              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleResumeClick}
                className="portfolio-button flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </a>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors animate-bounce"
              aria-label="Scroll to about section"
            >
              <ArrowDown size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;