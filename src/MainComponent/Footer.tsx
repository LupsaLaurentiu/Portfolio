import { useLenis } from "lenis/react";

export default function Footer() {
  const lenis = useLenis();

  const scrollToTop = () => {
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.1,
        easing: (t: number) =>
          Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      return;
    }

    // Fallback dacă Lenis nu este încă disponibil.
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="mt-20 border-t border-neutral-800 pt-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            Interested in working together?
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
            I&apos;m always open to discussing new projects, career
            opportunities and collaborations.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:lupsalau@ymail.com"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-800"
            >
              <i className="fa-solid fa-envelope text-sm" />
              Email
            </a>

            <a
              href="https://www.linkedin.com/in/laurentiu-lup%C8%99a-487a7826b/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-neutral-700 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-neutral-500 hover:bg-neutral-800"
            >
              <i className="fa-brands fa-linkedin-in text-sm" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-neutral-800 py-6 text-center text-xs text-neutral-500">
          <div>
            <p>© 2026 Laurentiu Lupsa</p>

            <p className="mt-1">
              Built with React • TypeScript • Tailwind CSS
            </p>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center justify-center gap-2 font-medium text-neutral-400 transition hover:text-white"
          >
            Back to top
            <i className="fa-solid fa-arrow-up text-xs" />
          </button>
        </div>
      </div>
    </footer>
  );
}