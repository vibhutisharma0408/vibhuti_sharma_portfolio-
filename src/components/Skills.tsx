import { 
  Code, 
  Database, 
  Globe, 
  Smartphone, 
  Cloud, 
  GitBranch, 
  Palette,
  Server,
  Layout,
  Zap,
  Box,
  FileCode,
  Layers,
  Terminal,
  Lock,
  Package,
  Upload,
  Settings
} from 'lucide-react';
const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "React.js", icon: <i className="devicon-react-original colored text-[18px]" /> },
        { name: "JavaScript (ES6+)", icon: <i className="devicon-javascript-plain colored text-[18px]" /> },
        { name: "HTML5", icon: <i className="devicon-html5-plain colored text-[18px]" /> },
        { name: "CSS3", icon: <i className="devicon-css3-plain colored text-[18px]" /> },
        { name: "Responsive Design", icon: <Layout className="w-4 h-4" /> },
        { name: "Chakra UI", icon: <Palette className="w-4 h-4" /> }
      ]
    },
    {
      title: "Backend Development", 
      icon: <Server className="w-6 h-6" />,
      skills: [
        { name: "Node.js", icon: <i className="devicon-nodejs-plain colored text-[18px]" /> },
        { name: "Express.js", icon: <i className="devicon-express-original text-[18px]" /> },
        { name: "RESTful APIs", icon: <Globe className="w-4 h-4" /> },
        { name: "Authentication", icon: <Lock className="w-4 h-4" /> },
        { name: "Server-side Logic", icon: <Server className="w-4 h-4" /> }
      ]
    },
    {
      title: "Database Management",
      icon: <Database className="w-6 h-6" />,
      skills: [
        { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored text-[18px]" /> },
        { name: "Firebase Firestore", icon: <i className="devicon-firebase-plain colored text-[18px]" /> },
        { name: "Database Design", icon: <Layers className="w-4 h-4" /> },
        { name: "Data Modeling", icon: <Box className="w-4 h-4" /> }
      ]
    },
    {
      title: "Cloud & Deployment",
      icon: <Cloud className="w-6 h-6" />,
      skills: [
        { name: "Firebase", icon: <i className="devicon-firebase-plain colored text-[18px]" /> },
        { name: "Vercel", icon: <i className="devicon-vercel-original text-[18px]" /> },
        { name: "Cloud Storage", icon: <Package className="w-4 h-4" /> },
        { name: "Continuous Deployment", icon: <Settings className="w-4 h-4" /> }
      ]
    },
    {
      title: "Version Control",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        { name: "Git", icon: <i className="devicon-git-plain colored text-[18px]" /> },
        { name: "GitHub", icon: <i className="devicon-github-original text-[18px]" /> },
        { name: "Version Control", icon: <Layers className="w-4 h-4" /> },
        { name: "Collaborative Development", icon: <Code className="w-4 h-4" /> }
      ]
    },
    {
      title: "Data Structures & Algorithms",
      icon: <Layers className="w-6 h-6" />,
      skills: [
        { name: "Arrays & Strings", icon: <Layers className="w-4 h-4" /> },
        { name: "Linked Lists", icon: <Box className="w-4 h-4" /> },
        { name: "Stacks & Queues", icon: <Box className="w-4 h-4" /> },
        { name: "Trees & Graphs", icon: <GitBranch className="w-4 h-4" /> },
        { name: "Sorting & Searching", icon: <Zap className="w-4 h-4" /> },
        { name: "Dynamic Programming", icon: <Settings className="w-4 h-4" /> },
        { name: "Time & Space Complexity", icon: <Terminal className="w-4 h-4" /> }
      ]
    },
    {
      title: "UI/UX Design",
      icon: <Palette className="w-6 h-6" />,
      skills: [
        { name: "Chakra UI", icon: <Palette className="w-4 h-4" /> },
        { name: "Component Libraries", icon: <Box className="w-4 h-4" /> },
        { name: "Modern Design", icon: <Layout className="w-4 h-4" /> },
        { name: "User Experience", icon: <Smartphone className="w-4 h-4" /> }
      ]
    },
    {
      title: "Soft Skills",
      icon: <Code className="w-6 h-6" />,
      skills: [
        { name: "Problem-solving", icon: <Settings className="w-4 h-4" /> },
        { name: "Team Collaboration", icon: <Code className="w-4 h-4" /> },
        { name: "Communication", icon: <Globe className="w-4 h-4" /> },
        { name: "Adaptability", icon: <Zap className="w-4 h-4" /> },
        { name: "Time Management", icon: <Terminal className="w-4 h-4" /> },
        { name: "Quick Learner", icon: <FileCode className="w-4 h-4" /> }
      ]
    }
  ];

  const coreSkills = [
    "MERN Stack", "Full Stack Development", "React.js", "Node.js", 
    "Express.js", "MongoDB", "Firebase", "JavaScript", "HTML5", "CSS3",
    "Chakra UI", "Vercel", "Git", "RESTful APIs", "Responsive Design", "DSA"
  ];

  return (
    <section id="skills" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Proficient in modern web technologies with a focus on the MERN stack ecosystem
          </p>
        </div>

        {/* Core Skills Tags */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-semibold text-center mb-8">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {coreSkills.map((skill, index) => (
              <span key={index} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up">
          {skillCategories.map((category, index) => (
            <div key={index} className="portfolio-card group">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary group-hover:scale-110 transition-transform duration-200">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center gap-3">
                    <div className="text-primary/70">
                      {skill.icon}
                    </div>
                    <span className="text-muted-foreground">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="portfolio-card inline-block">
            <h3 className="text-xl font-semibold mb-4 text-gradient">Always Learning</h3>
            <p className="text-muted-foreground max-w-2xl">
              Continuously expanding my skillset with the latest technologies and best practices 
              in web development. Currently exploring advanced React patterns, microservices architecture, 
              and modern deployment strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;