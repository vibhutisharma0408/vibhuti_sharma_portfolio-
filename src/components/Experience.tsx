import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Executive",
      company: "NoBroker Technology",
      location: "Bengaluru, Karnataka",
      duration: "08/2024 – 12/2024",
      responsibilities: [
        "Handled customer inquiries and issues, providing timely and effective solutions to ensure satisfaction",
        "Troubleshot problems, coordinated with relevant teams, and implemented resolutions to improve customer experience"
      ]
    },
    {
      role: "Investment Manager",
      company: "Squareyard",
      location: "Bengaluru, Karnataka",
      duration: "06/2024 – 10/2024",
      responsibilities: [
        "Presented tailored real estate investment opportunities and guided clients on ROI and risk",
        "Managed the full sales cycle from lead generation to deal closure",
        "Maintained client relationships and ensured smooth transaction execution"
      ]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building expertise through diverse professional roles and client interactions
          </p>
        </div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="portfolio-card animate-fade-in-up group">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gradient mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl text-foreground font-medium mb-3">
                    {exp.company}
                  </p>
                </div>
                <div className="flex flex-col gap-2 text-muted-foreground text-sm md:text-right">
                  <div className="flex items-center gap-2 md:justify-end">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 md:justify-end">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <Briefcase className="w-4 h-4 mt-1 text-primary flex-shrink-0" />
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
