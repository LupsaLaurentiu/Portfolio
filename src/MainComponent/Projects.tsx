import { useCallback, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import { useLenis } from "lenis/react";
import aiReceptionistArchitecture from "../assets/ai-receptionist-architecture.svg";
import scraperPipeline from "../assets/scraper-pipeline.svg";
import sunshineArchitecture from "../assets/sunshine-resort-architecture.svg";
import topSidraPreview from "../assets/top-sidra-responsive-preview.png";
import topSidraPreview2 from "../assets/top-sidra-responsive-preview-2.png";
import topSidraPreview3 from "../assets/top-sidra-responsive-preview-3.png";
import SunshineResort1 from "../assets/Sunshine-resort-1.png";
import SunshineResort2 from "../assets/Sunshine-resort-2.png";
import SunshineResort3 from "../assets/Sunshine-resort-3.png";
import SunshineResort4 from "../assets/Sunshine-resort-4.png";
import SunshineResort5 from "../assets/Sunshine-resort-5.png";
import SunshineResort6 from "../assets/Sunshine-resort-6.png";
import SunshineResort7 from "../assets/Sunshine-resort-7.png";
import SunshineResort8 from "../assets/Sunshine-resort-8.png";
import SunshineResort9 from "../assets/Sunshine-resort-9.png";
import SunshineResort10 from "../assets/Sunshine-resort-10.png";
import SunshineResort11 from "../assets/Sunshine-resort-11.png";
import SunshineResort12 from "../assets/Sunshine-resort-12.png";
import SunshineResort13 from "../assets/Sunshine-resort-13.png";
import SunshineResort14 from "../assets/Sunshine-resort-14.png";

type ProjectType =
  | "Client project"
  | "Personal project"
  | "Commercial project";

interface ProjectMedia {
  src: string;
  alt: string;
  label?: string;
  caption?: string;
}

interface Project {
  title: string;
  description: string;
  ownership?: string;
  projectType?: ProjectType;
  tech: string[];
  github?: string;
  liveUrl?: string;
  highlights?: string[];
  media?: ProjectMedia[];
}

type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "automation"
  | "tools"
  | "engineering";

const techCategoryMap: Record<string, TechCategory> = {
  // Frontend
  React: "frontend",
  "Next.js": "frontend",
  TypeScript: "frontend",
  JavaScript: "frontend",
  "Tailwind CSS": "frontend",
  Angular: "frontend",

  // Backend
  "Node.js": "backend",
  NestJS: "backend",
  "REST APIs": "backend",
  "API Design": "backend",
  JWT: "backend",
  "JWT Authentication": "backend",
  Stripe: "backend",
  "Stripe Integration": "backend",

  // Databases & data
  PostgreSQL: "database",
  Prisma: "database",
  "Prisma ORM": "database",
  MySQL: "database",
  "Microsoft SQL Server": "database",
  SQL: "database",
  CSV: "database",
  JSON: "database",
  JSONL: "database",

  // Automation & AI
  Python: "automation",
  Reflex: "automation",
  Playwright: "automation",
  "Web Scraping": "automation",
  "HTML Parsing": "automation",
  "AI Integrations": "automation",
  "Workflow Automation": "automation",
  "Data Processing": "automation",

  // Development tools
  Git: "tools",
  GitHub: "tools",
  Vite: "tools",
  Webpack: "tools",
  Postman: "tools",
  Figma: "tools",
  "Power BI": "tools",

  // Engineering practices
  "Responsive Design": "engineering",
  SEO: "engineering",
  "Software Architecture": "engineering",
  "Database Design": "engineering",
  Authentication: "engineering",
  "Payment Integration": "engineering",
  OOP: "engineering",
  SOLID: "engineering",
  "Clean Code": "engineering",
  "Performance Optimization": "engineering",
};

const techColorClasses: Record<TechCategory, string> = {
  frontend: "bg-blue-800 text-blue-200",
  backend: "bg-green-800 text-green-200",
  database: "bg-cyan-900 text-cyan-200",
  automation: "bg-purple-800 text-purple-200",
  tools: "bg-orange-900 text-orange-200",
  engineering: "bg-red-900 text-red-200",
};

function getTechColorClasses(technology: string) {
  const category = techCategoryMap[technology];

  return category
    ? techColorClasses[category]
    : "bg-neutral-700 text-neutral-200";
}

const projectList: Project[] = [
  {
    title: "Sunshine Resort",
    description:
      "Full-stack hospitality platform for a premium resort, combining a marketing website, a custom booking engine and an admin property management dashboard (mini PMS).",
    ownership:
      "Independently designed and developed the entire platform, from system architecture and database design to the user interfaces, booking workflows and payment integration.",
    projectType: "Client project",
    highlights: [
      "Public website, booking engine and admin PMS",
      "Real-time availability and seasonal pricing",
      "Stripe deposits and online payments",
      "Single backend powering the entire platform",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "NestJS",
      "PostgreSQL",
      "Prisma ORM",
      "Stripe",
    ],
    media: [
    {
      src: sunshineArchitecture,
      alt: "Sunshine Resort system architecture",
      label: "System architecture",
      caption:
        "High-level architecture showing the public website, booking engine and admin PMS powered by a single NestJS backend with Prisma, PostgreSQL and Stripe.",
    },
    {
      src: SunshineResort1,
      alt: "Sunshine Resort homepage",
      label: "Homepage",
      caption:
        "Luxury landing page designed to communicate the resort's premium identity and guide visitors toward direct online bookings.",
    },
    {
      src: SunshineResort2,
      alt: "Sunshine Resort brand storytelling section",
      label: "Brand storytelling",
      caption:
        "Editorial-style content introducing the resort's concept, atmosphere and adults-only hospitality experience.",
    },
    {
      src: SunshineResort3,
      alt: "Sunshine Resort apartment overview",
      label: "Apartment overview",
      caption:
        "Accommodation presentation featuring apartment categories, key characteristics and direct access to detailed room pages.",
    },
    {
      src: SunshineResort4,
      alt: "Sunshine Resort apartment details page",
      label: "Apartment details",
      caption:
        "Detailed apartment page combining photography, specifications and clear calls to action to support booking decisions.",
    },
    {
      src: SunshineResort5,
      alt: "Sunshine Resort apartment amenities",
      label: "Amenities",
      caption:
        "Structured presentation of apartment facilities and included amenities in an elegant, easy-to-scan layout.",
    },
    {
      src: SunshineResort6,
      alt: "Sunshine Resort allocation engine",
      label: "allocation engine",
      caption:
        "Interactive allocation interface with date selection, real-time availability, seasonal pricing and an automatically updated reservation summary.",
    },
    {
      src: SunshineResort7,
      alt: "Sunshine Resort booking engine",
      label: "Booking engine",
      caption:
        "Interactive booking interface with date selection, real-time availability, seasonal pricing and an automatically updated reservation summary.",
    },
    {
      src: SunshineResort8,
      alt: "Sunshine Resort reservation selection flow",
      label: "Reservation flow",
      caption:
        "Apartment selection workflow with occupancy configuration, live price calculation and a detailed reservation breakdown before submission.",
    },
    {
      src: SunshineResort9,
      alt: "Sunshine Resort admin dashboard",
      label: "Admin dashboard",
      caption:
        "Operational dashboard providing a real-time overview of occupancy, arrivals, departures, revenue and pending reservation activity.",
    },
    {
      src: SunshineResort10,
      alt: "Sunshine Resort blocked periods management",
      label: "Availability management",
      caption:
        "Administrative interface for creating and managing maintenance periods and internal apartment blocks.",
    },
    {
      src: SunshineResort11,
      alt: "Sunshine Resort arrivals and recent reservations",
      label: "Daily operations",
      caption:
        "Operational view of scheduled arrivals, departures and recently created reservations for day-to-day property management.",
    },
    {
      src: SunshineResort12,
      alt: "Sunshine Resort reservation details",
      label: "Reservation management",
      caption:
        "Comprehensive reservation view with guest details, allocated apartments, financial information and available operational actions.",
    },
    {
      src: SunshineResort13,
      alt: "Sunshine Resort reservation export settings",
      label: "Reservation export",
      caption:
        "Configurable Excel export with filters for reservation status, booking source, date range and customer information.",
    },
    {
      src: SunshineResort14,
      alt: "Sunshine Resort PMS inventory calendar",
      label: "PMS calendar",
      caption:
        "Thirty-day inventory calendar combining confirmed reservations, pending bookings, maintenance blocks and external iCal events.",
    },
    ],
  },
  {
    title: "Website Technologies Scraper",
    description:
      "A multi-stage technology detection engine that combines HTTP analysis, browser rendering and evidence-based technology classification.",
    ownership:
      "Designed and implemented the complete scraping and detection pipeline, including HTTP crawling, browser rendering, technology rules, evidence collection, confidence scoring and structured exports.",
    projectType: "Personal project",
    highlights: [
      "Crawls large domain datasets",
      "Native and Wappalyzer-style detection",
      "Evidence-based confidence scoring",
      "CSV, JSON and JSONL exports",
    ],
    tech: [
      "TypeScript",
      "Node.js",
      "Playwright",
      "HTML Parsing",
      "CSV",
      "JSON",
    ],
    github:
      "https://github.com/LupsaLaurentiu/website-technologies-scraper",
    media: [
      {
        src: scraperPipeline,
        alt: "Website Technologies Scraper detection pipeline",
        label: "Detection pipeline",
        caption:
          "Domains pass through a fast HTTP stage and a Playwright rendering stage before technology detection, evidence validation, confidence scoring and structured export.",
      },
    ],
  },
  {
    title: "AI Receptionist for Clinics",
    description:
      "A full-stack SaaS platform for clinics, combining secure access, appointment scheduling, clinic administration and AI-assisted receptionist workflows.",
    ownership:
      "Independently designed and developed the application architecture, authentication flow, scheduling logic, role-based access model, database structure and user-facing interfaces.",
    projectType: "Personal project",
    highlights: [
      "Secure authentication and role-based access",
      "Patient and clinic staff workflows",
      "Appointment scheduling and availability",
      "AI-assisted receptionist interactions",
    ],
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "JWT",
    ],
    media: [
      {
        src: aiReceptionistArchitecture,
        alt: "AI Receptionist for Clinics application architecture",
        label: "Application architecture",
        caption:
          "The Next.js interface serves patients, reception staff and clinic administrators. A NestJS API handles authentication, permissions and scheduling, with Prisma and PostgreSQL providing the application data layer.",
      },
    ],
  },
  {
    title: "TOP SIDRA EXPERT",
    description:
      "Production business website focused on clear service presentation, responsive behavior, SEO-oriented structure and reliable performance across devices.",
    ownership:
      "Independently designed and developed the complete production website, including its responsive interface, reusable components, content structure, SEO implementation and deployment.",
    projectType: "Client project",
    liveUrl: "https://www.topsidraexpert.ro/",
    highlights: [
      "Responsive desktop and mobile experience",
      "SEO-oriented page and content structure",
      "Reusable React component architecture",
      "Production build and deployment",
    ],
    tech: ["React", "TypeScript", "Vite", "Responsive Design", "SEO"],
    media: [
      {
        src: topSidraPreview,
        alt: "TOP SIDRA EXPERT website preview",
        label: "Landing page",
        caption:
          "The website was designed and implemented as a responsive production experience, with desktop and mobile layouts built from reusable React components.",
      },
      {
        src: topSidraPreview2,
        alt: "TOP SIDRA EXPERT website preview",
        label: "Gallery page",
        caption:
          "The website was designed and implemented as a responsive production experience, with desktop and mobile layouts built from reusable React components.",
      },
      {
        src: topSidraPreview3,
        alt: "TOP SIDRA EXPERT website preview",
        label: "Landing page",
        caption:
          "The website was designed and implemented as a responsive production experience, with desktop and mobile layouts built from reusable React components.",
      },
    ],
  },
];

export default function Projects() {
  const lenis = useLenis();

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [visible, setVisible] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const modalWrapperRef = useRef<HTMLDivElement | null>(null);
  const modalContentRef = useRef<HTMLDivElement | null>(null);

  const openProject = (index: number) => {
    setOpenIndex(index);
    setSlideIndex(0);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  };

  const closeProject = useCallback(() => {
    setVisible(false);
    window.setTimeout(() => {
      setOpenIndex(null);
      setSlideIndex(0);
    }, 200);
  }, []);

  const activeProject =
    openIndex !== null ? projectList[openIndex] : null;

  const media = activeProject?.media ?? [];
  const activeMedia = media[slideIndex] ?? null;
  const hasMultipleSlides = media.length > 1;

  const showPreviousSlide = useCallback(() => {
    setSlideIndex((current) =>
      media.length === 0
        ? 0
        : (current - 1 + media.length) % media.length,
    );
  }, [media.length]);

  const showNextSlide = useCallback(() => {
    setSlideIndex((current) =>
      media.length === 0 ? 0 : (current + 1) % media.length,
    );
  }, [media.length]);

  useEffect(() => {
    if (openIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeProject();
      }

      if (event.key === "ArrowLeft" && media.length > 1) {
        showPreviousSlide();
      }

      if (event.key === "ArrowRight" && media.length > 1) {
        showNextSlide();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Stop Lenis while the modal is open. We intentionally do not
    // change html/body overflow, because doing so removes the browser
    // scrollbar and shifts the page layout horizontally.
    lenis?.stop();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      lenis?.start();
    };
  }, [
    closeProject,
    lenis,
    media.length,
    openIndex,
    showNextSlide,
    showPreviousSlide,
  ]);

  useEffect(() => {
    if (openIndex === null) return;

    const wrapper = modalWrapperRef.current;
    const content = modalContentRef.current;

    if (!wrapper || !content) return;

    const modalLenis = new Lenis({
      wrapper,
      content,
      eventsTarget: wrapper,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      duration: 0.95,
      wheelMultiplier: 0.85,
      touchMultiplier: 1,
      overscroll: false,
      autoRaf: true,
    });

    modalLenis.resize();

    return () => {
      modalLenis.destroy();
    };
  }, [openIndex]);

  useEffect(() => {
    setSlideIndex(0);
  }, [openIndex]);

  return (
    <section id="projects" className="mb-10 max-w-3xl scroll-mt-24">
      <div className="mb-5">
        <h2 className="mb-2 text-2xl font-bold md:text-3xl">
          Projects
        </h2>

        <p className="max-w-2xl text-sm leading-relaxed text-neutral-400">
          Selected projects showcasing full-stack architecture,
          automation systems and production-ready web development.
        </p>
      </div>

      <div className="grid gap-5">
        {projectList.map((project, index) => (
          <article
            key={project.title}
            role="button"
            tabIndex={0}
            aria-label={`Open details for ${project.title}`}
            onClick={() => openProject(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openProject(index);
              }
            }}
            className="group flex w-full cursor-pointer flex-col rounded-xl border border-neutral-700 bg-neutral-800/60 p-5 text-left transition-colors hover:border-neutral-500 hover:bg-neutral-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400 sm:p-6"
          >
            <div className="mb-2 flex items-start justify-between gap-3">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>

                {project.projectType && (
                  <span className="mt-1 inline-flex rounded-full border border-neutral-700 bg-neutral-900/70 px-2.5 py-0.5 text-[11px] font-medium text-neutral-400">
                    {project.projectType}
                  </span>
                )}
              </div>

              <div className="flex shrink-0 items-center gap-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live project"
                    aria-label={`Open live project for ${project.title}`}
                    onClick={(event) => event.stopPropagation()}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-neutral-700"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                  </a>
                )}

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                    aria-label={`${project.title} on GitHub`}
                    onClick={(event) => event.stopPropagation()}
                    className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-neutral-700"
                  >
                    <i className="fa-brands fa-github text-lg" />
                  </a>
                )}
              </div>
            </div>

            <p className="mb-4 max-w-2xl text-sm leading-relaxed text-neutral-300">
              {project.description}
            </p>

            {project.highlights && (
              <ul className="mb-5 grid gap-x-8 gap-y-1.5 sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-2 text-sm text-neutral-300"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto">
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                Tech
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className={`rounded-full px-3 py-0.5 text-xs font-semibold ${getTechColorClasses(
                      technology,
                    )}`}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <span className="mt-4 text-xs font-semibold text-neutral-400 transition-colors group-hover:text-white">
              View project details
              <i className="fa-solid fa-arrow-right ml-1" />
            </span>
          </article>
        ))}
      </div>

      {activeProject && (
        <div
          role="presentation"
          className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 transition-opacity duration-200 sm:p-8 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeProject}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            ref={modalWrapperRef}
            onClick={(event) => event.stopPropagation()}
            className={`project-modal-scroll relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-neutral-700 bg-neutral-900 transition-all duration-200 ${
              visible
                ? "scale-100 opacity-100"
                : "scale-95 opacity-0"
            }`}
          >
            <div ref={modalContentRef}>
              <header className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-neutral-800 bg-neutral-900/95 px-6 py-4 backdrop-blur sm:px-8">
              <div className="min-w-0">
                <h3
                  id="project-modal-title"
                  className="truncate text-xl font-bold text-white sm:text-2xl"
                >
                  {activeProject.title}
                </h3>

                {activeProject.projectType && (
                  <p className="mt-0.5 text-xs text-neutral-400">
                    {activeProject.projectType}
                  </p>
                )}
              </div>

              <div className="flex shrink-0 items-center gap-1">
                {activeProject.liveUrl && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View live project"
                    aria-label={`Open live project for ${activeProject.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square text-sm" />
                  </a>
                )}

                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="View on GitHub"
                    aria-label={`${activeProject.title} on GitHub`}
                    className="flex h-9 w-9 items-center justify-center rounded-full text-neutral-300 transition hover:bg-neutral-800 hover:text-white"
                  >
                    <i className="fa-brands fa-github text-xl" />
                  </a>
                )}

                <button
                  type="button"
                  onClick={closeProject}
                  aria-label="Close project details"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-800 text-neutral-300 transition hover:bg-neutral-700 hover:text-white"
                >
                  <i className="fa-solid fa-xmark text-lg" />
                </button>
              </div>
            </header>

            <div className="p-6 pr-7 sm:p-8 sm:pr-9">
              <p className="mb-5 text-base leading-relaxed text-neutral-300">
                {activeProject.description}
              </p>

              {activeProject.ownership && (
                <div className="mb-6 rounded-lg border border-neutral-700 bg-neutral-800/50 p-4">
                  <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    Project ownership
                  </p>

                  <p className="text-sm leading-relaxed text-neutral-200">
                    {activeProject.ownership}
                  </p>
                </div>
              )}

              {activeProject.highlights && (
                <div className="mb-6">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                    Key capabilities
                  </p>

                  <ul className="space-y-1.5">
                    {activeProject.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-neutral-300"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neutral-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mb-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-neutral-400">
                  Technology stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {activeProject.tech.map((technology) => (
                    <span
                      key={technology}
                      className={`rounded-full px-3 py-0.5 text-xs font-semibold ${getTechColorClasses(
                        technology,
                      )}`}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {(activeProject.liveUrl || activeProject.github) && (
                <div className="mb-6 flex flex-wrap gap-3">
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
                      Visit live website
                    </a>
                  )}

                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 bg-neutral-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-700"
                    >
                      <i className="fa-brands fa-github" />
                      View source code
                    </a>
                  )}
                </div>
              )}

              {activeMedia && (
                <section aria-label={`${activeProject.title} project gallery`}>
                  <div className="mb-2 flex items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
                        Project gallery
                      </p>

                      {activeMedia.label && (
                        <p className="mt-1 text-sm font-semibold text-neutral-200">
                          {activeMedia.label}
                        </p>
                      )}
                    </div>

                    {hasMultipleSlides && (
                      <p className="shrink-0 text-xs font-medium text-neutral-500">
                        {slideIndex + 1} / {media.length}
                      </p>
                    )}
                  </div>

                  <div className="relative overflow-hidden rounded-xl border border-neutral-700 bg-neutral-950/60">
                    <div
                      key={`${activeProject.title}-${slideIndex}`}
                      className="animate-[fadeIn_250ms_ease-out]"
                    >
                      <img
                        src={activeMedia.src}
                        alt={activeMedia.alt}
                        className="max-h-[62vh] w-full object-contain"
                      />
                    </div>

                    {hasMultipleSlides && (
                      <>
                        <button
                          type="button"
                          onClick={showPreviousSlide}
                          aria-label="Show previous image"
                          className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-lg backdrop-blur transition hover:bg-black/90"
                        >
                          <i className="fa-solid fa-chevron-left" />
                        </button>

                        <button
                          type="button"
                          onClick={showNextSlide}
                          aria-label="Show next image"
                          className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/70 text-white shadow-lg backdrop-blur transition hover:bg-black/90"
                        >
                          <i className="fa-solid fa-chevron-right" />
                        </button>
                      </>
                    )}
                  </div>

                  {activeMedia.caption && (
                    <p className="mt-3 text-xs leading-relaxed text-neutral-400">
                      {activeMedia.caption}
                    </p>
                  )}

                  {hasMultipleSlides && (
                    <div
                      className="mt-4 flex items-center justify-center gap-2"
                      aria-label="Choose gallery image"
                    >
                      {media.map((item, index) => (
                        <button
                          key={`${item.src}-${index}`}
                          type="button"
                          onClick={() => setSlideIndex(index)}
                          aria-label={`Show image ${index + 1}`}
                          aria-current={
                            index === slideIndex ? "true" : undefined
                          }
                          className={`h-2.5 rounded-full transition-all ${
                            index === slideIndex
                              ? "w-7 bg-white"
                              : "w-2.5 bg-neutral-600 hover:bg-neutral-400"
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </section>
              )}
            </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}