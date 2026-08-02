const skillGroups = [
  {
    title: "Frontend",
    color: "blue",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    color: "green",
    skills: [
      "Node.js",
      "NestJS",
      "REST APIs",
      "API Design",
      "JWT Authentication",
      "Stripe Integration",
    ],
  },
  {
    title: "Databases",
    color: "cyan",
    skills: [
      "PostgreSQL",
      "Prisma ORM",
      "Microsoft SQL Server",
      "MySQL",
    ],
  },
  {
    title: "Automation & AI",
    color: "purple",
    skills: [
      "Python",
      "Playwright",
      "Web Scraping",
      "AI Integrations",
      "Workflow Automation",
    ],
  },
  {
    title: "Development Tools",
    color: "orange",
    skills: [
      "Git",
      "GitHub",
      "Vite",
      "Postman",
      "Figma",
    ],
  },
  {
    title: "Software Engineering",
    color: "red",
    skills: [
      "Software Architecture",
      "Database Design",
      "Authentication",
      "Payment Integration",
      "OOP",
      "SOLID",
      "Clean Code",
      "Performance Optimization",
    ],
  },
];

const colorClasses = {
  blue: "bg-blue-800 text-blue-200",
  green: "bg-green-800 text-green-200",
  cyan: "bg-cyan-900 text-cyan-200",
  purple: "bg-purple-800 text-purple-200",
  orange: "bg-orange-900 text-orange-200",
  red: "bg-red-900 text-red-200",
};

export default function Skills() {
  return (
    <section id="skills" className="mb-10 max-w-3xl scroll-mt-24">
      <div className="mb-5">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">
          Tehnical Skills
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          Technologies and engineering practices I use to design, build and
          deliver production-ready full-stack applications.
        </p>
      </div>

      <div className="space-y-5">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-2 text-sm font-semibold text-neutral-200">
              {group.title}
            </h3>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className={`rounded-full px-4 py-1 text-sm font-semibold ${
                    colorClasses[
                      group.color as keyof typeof colorClasses
                    ]
                  }`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}