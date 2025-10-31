import { Heart, Code } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-secondary border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gradient mb-2">Vibhuti Sharma</h3>
            <p className="text-muted-foreground">
              MERN Stack Developer | Full Stack Web Development Enthusiast
            </p>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-4">
            <span>Built with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>and</span>
            <Code className="w-4 h-4 text-primary" />
            <span>using React & TypeScript</span>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Vibhuti Sharma. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;