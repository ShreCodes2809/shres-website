const experiences = [
  {
    period: "Jan 2026 — Present",
    role: "Platform Deployment Contributor",
    company: "Network Theory Applied Research Institute",
    description:
      "Currently working on deploying a pilot node for Agrinet, a protocol aimed at transparent agricultural surplus management amongst growers and consumers.",
    technologies: ["Docker", "Git", "Amazon DynamoDB", "GitHub Actions"],
    current: true,
  },
  {
    period: "Aug 2025 - Jan 2026",
    role: "Robotics Engineering Intern",
    company: "Void Robotics",
    description:
      "Productized applied computer vision and robotics systems to support automated perception and navigation in real-world environments. Focused on production-ready design, enabling reliable object detection, autonomous movement, and scalable deployment for intelligent robotic applications.",
    technologies: ["ROS", "Computer Vision", "C++", "Docker", "YOLO"],
    current: false,
  },
  {
    period: "Aug 2025 - Sep 2025",
    role: "Data Science Expert",
    company: "Mercor",
    description:
      "Delivered applied data science and AI evaluation frameworks through stress-testing LLM-based reasoning systems, helping surface reliability gaps and failure modes in complex, multi-step analytical tasks. Primarily focused on decision quality, reliability, and real-world applicability in enterprise AI systems.",
    technologies: ["Prompt Engineering", "Human-in-the-Loop", "LLM Evaluation", "Statistical Data Analysis"],
    current: false,
  },
  {
    period: "Jan 2025 - May 2025",
    role: "Data Scientist",
    company: "Parlay Finance",
    description:
      "Built applied machine learning solutions for financial decision systems, supporting faster, more transparent credit assessments in regulated enterprise environments. Focused on decision transparency and operational reliability, helping reduce approval turnarounds",
    technologies: ["Python", "Regression Modeling", "Visualization", "Machine Learning"],
    current: false,
  },
  {
    period: "Jun 2022 - Aug 2022",
    role: "Undergraduate Research Intern",
    company: "National Institute of Technology, Tiruchirappalli",
    description:
      "Conducted applied ML research in medical imaging, contributing to a peer-reviewed publication. Built deep learning models for healthcare image processing, strengthening foundations in applied ML for regulated domains",
    technologies: ["Python", "Tensorflow", "Scikit Learn", "Deep Learning", "Neural Networks"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Career Journey
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience shaped by{" "}
            <span className="font-serif italic font-normal accent-text">
              {" "}
              real-world problems.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A snapshot of my professional growth, from curious beginner to
            an AI/ML practitioner building products at scale.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(255,155,66,0.45)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm font-medium accent-text">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 accent-text">
                      {exp.role}
                    </h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
