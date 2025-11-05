import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsOpen(false);
  };

  const resumeUrl = `${import.meta.env.BASE_URL}Vibhuti_Sharma_Resume.pdf`;
  const handleResumeClick = (e: any) => {
    e.preventDefault();
    const url = resumeUrl;
    // Open in a new tab
    window.open(url, '_blank', 'noopener,noreferrer');
    // Trigger download
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Vibhuti_Sharma_Resume.pdf';
    document.body.appendChild(a);
    a.click();
    a.remove();
    // Close mobile menu if open
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-xl font-bold text-gradient hover:scale-105 transition-transform duration-200"
            >
              Vibhuti Sharma
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`nav-link ${activeSection === item.id ? 'text-primary' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Vibhuti_Sharma_Resume.pdf"
                onClick={handleResumeClick}
                className="portfolio-button flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background/95">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-3 py-2 rounded-md nav-link ${activeSection === item.id ? 'text-primary bg-primary/10' : ''}`}
                >
                  {item.label}
                </button>
              ))}
              <a
                href={resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                download="Vibhuti_Sharma_Resume.pdf"
                onClick={handleResumeClick}
                className="block w-full text-left px-3 py-2 rounded-md portfolio-button flex items-center gap-2"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;