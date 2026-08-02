import profil from "./assets/profil.png";

export default function ProfileSidebar() {
  return (
    <aside className="mb-4 flex w-full flex-row items-start self-start px-4 py-8 md:sticky md:top-8 md:mb-0 md:w-[320px] md:flex-col md:items-start">
      <img
        src={profil}
        alt="Laurentiu Lupsa"
        className="mr-4 h-16 w-16 rounded-full border-2 object-cover md:mr-0 md:mb-6 md:h-36 md:w-36"
      />

      <div className="flex flex-1 flex-col items-start">
        <h1 className="mb-1 text-xl font-bold text-white md:mb-2 md:text-3xl">
          Laurentiu Lupsa
        </h1>

        <p className="mb-2 text-base font-semibold text-neutral-300 md:text-xl">
          Full-Stack Software Engineer
        </p>

        <div className="mb-3 flex items-center gap-1 text-neutral-400">
          <span>📍 Cluj-Napoca, Romania</span>
          <span>🇷🇴</span>
        </div>

        <p className="mb-6 max-w-xs text-left text-xs leading-relaxed text-neutral-400 md:text-sm">
          Building production-ready software with modern web technologies.
        </p>

        <div className="flex flex-wrap items-center gap-2">
          {/* Resume */}
          <a
            href="/CV-Laurentiu-Lupsa.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border-2 border-neutral-600 px-4 py-2 font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-700/80"
          >
            Resume

            <i className="fa-solid fa-download text-sm" />
          </a>

          {/* Email */}
          <a
            href="mailto:lupsalauL@yahoo.com?subject=Job%20Opportunity"
            title="Email"
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-700"
          >
            <i className="fa-solid fa-envelope text-xl" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/laurentiu-lup%C8%99a-487a7826b/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-neutral-700"
          >
            <i className="fa-brands fa-linkedin-in text-xl" />
          </a>
        </div>
      </div>
    </aside>
  );
}