const educationEntries = [
  {
    school: "University of Colorado Boulder",
    degree: "M.S. in Data Science",
    dates: "2023 — 2025",
    cgpa: "CGPA: 3.73/4",
    coursework: [
      "Statistics",
      "Neural networks and deep learning",
      "Machine learning",
      "Big data analytics",
      "Data mining",
      "Information visualization",
    ],
    badge: "Graduate Studies",
  },
  {
    school: "National Institute of Technology, Tiruchirappalli",
    degree: "B. Tech in Electronics and Communication Engineering",
    dates: "2019 — 2023",
    cgpa: "CGPA: 8.06/10",
    coursework: [
      "Linear Algebra and Calculus",
      "Statistical Theory of Communication",
      "Deep Learning",
    ],
    badge: "Undergraduate Studies",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-12">
          <span className="text-sm font-medium tracking-widest accent-text uppercase">
            Academic Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Education
          </h2>
          <p className="text-muted-foreground">
            A snapshot of the formal education experience that powers future
            work.
          </p>
        </div>

        <div className="space-y-8">
          {educationEntries.map((entry, idx) => (
            <div
              key={entry.school}
              className="glass rounded-3xl border border-primary/20 p-8 md:p-10 transition-all duration-500 hover:border-primary/40 hover:shadow-[0_0_45px_rgba(255,155,66,0.25)]"
              style={{ animationDelay: `${idx * 120}ms` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <p className="text-sm uppercase tracking-widest accent-text">
                    {entry.dates}
                  </p>
                  <h3 className="text-2xl font-semibold mt-2 accent-text">
                    {entry.school}
                  </h3>
                  <p className="text-muted-foreground mt-1">{entry.degree}</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    {entry.cgpa}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-flex px-4 py-2 text-sm font-medium rounded-full border accent-pill">
                    {entry.badge}
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold tracking-[0.3em] uppercase text-muted-foreground">
                  Relevant Coursework
                </p>
                <ul className="mt-4 space-y-1.5 text-muted-foreground">
                  {entry.coursework.map((course, courseIdx) => (
                    <li key={courseIdx} className="flex gap-3">
                      <span className="accent-text mt-1.5 text-xs">●</span>
                      <p>{course}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
