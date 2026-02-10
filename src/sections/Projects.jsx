import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
  {
    title: "Multi-Agent Trading Floor Simulation",
    description:
      "A fully modular, real-time trading floor simulation featuring autonomous trader agents, custom market microstructure, account management, and a live Gradio dashboard for monitoring trades, positions, balances, and tracer events.",
    image: "projects/1.jpg",
    tags: ["Python", "MCP", "FastAPI", "Trading"],
    link: "#",
    github: "https://github.com/ShreCodes2809/mcp-first-project",
  },
  {
    title: "Sidekick",
    description:
      "A modular, graph-driven LLM agent built using LangGraph, designed to autonomously interpret user queries, route tasks intelligently, and trigger dynamic tool-based actions with structured state transitions.",
    image: "projects/2.jpg",
    tags: ["Python", "LangGraph", "LangChain", "Modular Code"],
    link: "#",
    github: "https://github.com/ShreCodes2809/langgraph-sidekick-project",
  },
  {
    title: "Privacy Enhancing ML for Job Interview Analysis",
    description:
      "This project explores privacy-preserving machine learning techniques to assess communication quality in job interviews. The focus is on developing fair, ethical, and privacy-enhancing models for automated job interview evaluations.",
    image: "projects/3.jpg",
    tags: ["Python", "NLP", "Neural Networks", "Feature Engineering", "Data Exploration"],
    link: "#",
    github: "https://github.com/ShreCodes2809/privacy-aware-interview-ml",
  },
  {
    title: "ScaleFlow: AI-Powered Supply Chain Risk Prediction",
    description:
      "ScaleFlow is a full-stack, containerized platform that uses machine learning models, batch-processed data pipelines, and a real-time chatbot interface driven by artificial intelligence to forecast supply chain risks.",
    image: "projects/4.jpg",
    tags: ["Apache Airflow", "Docker", "Python", "PostgreSQL", "MLFlow"],
    link: "#",
    github: "https://github.com/ShreCodes2809/scaleflow",
  },
];

export const Projects = () => {
  const publicBasePath = import.meta.env.BASE_URL;
  const handleViewAllProjects = () => {
    window.open("https://github.com/ShreCodes2809", "_blank", "noopener,noreferrer");
  };

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal accent-text">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={`${publicBasePath}${project.image}`}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                />
                {/* Overlay Links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    className="p-3 rounded-full glass accent-icon transition-all hover:bg-surface/70"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold accent-text transition-colors group-hover:text-[color:var(--color-highlight-hover)]">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    className="w-5 h-5 
                  accent-icon group-hover:text-[color:var(--color-highlight-hover)]
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                  />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full text-xs font-medium border accent-pill"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedBorderButton onClick={handleViewAllProjects}>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
