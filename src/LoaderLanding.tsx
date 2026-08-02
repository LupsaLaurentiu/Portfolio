import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface LoaderLandingProps {
  onDone: () => void;
}

const DURATION = 2400;
const EXIT_DURATION = 0.9;

const words = ["Turning", "ideas", "into", "real", "products"];
const HIGHLIGHT_FROM = 3; // "real products" gets the shimmer

export default function LoaderLanding({ onDone }: LoaderLandingProps) {
  const [hide, setHide] = useState(false);
  const [percent, setPercent] = useState(0);
  const startRef = useRef<number | null>(null);

  // Lock scroll while the loader is visible
  useEffect(() => {
    const prevBody = document.body.style.overflow;
    const prevHtml = document.documentElement.style.overflow;
    document.body.style.overflow = hide ? prevBody : "hidden";
    document.documentElement.style.overflow = hide ? prevHtml : "hidden";
    return () => {
      document.body.style.overflow = prevBody;
      document.documentElement.style.overflow = prevHtml;
    };
  }, [hide]);

  // Drive the 0 -> 100 counter with rAF for a smooth, real progress feel
  useEffect(() => {
    if (hide) return;
    let rafId: number;

    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const pct = Math.min(100, Math.round((elapsed / DURATION) * 100));
      setPercent(pct);
      if (pct < 100) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hide]);

  // Skip on click, or auto-advance once the counter finishes
  useEffect(() => {
    if (hide) return;
    const hideHandler = () => setHide(true);
    const timeout = window.setTimeout(hideHandler, DURATION);
    window.addEventListener("click", hideHandler, { once: true });
    return () => {
      window.removeEventListener("click", hideHandler);
      window.clearTimeout(timeout);
    };
  }, [hide]);

  // Hand off to the site once the circle has fully closed
  useEffect(() => {
    if (!hide) return;
    const timeout = window.setTimeout(onDone, EXIT_DURATION * 1000 + 60);
    return () => window.clearTimeout(timeout);
  }, [hide, onDone]);

  return (
    <AnimatePresence>
      {!hide && (
        <div key="loader" className="fixed inset-0 z-50 overflow-hidden bg-[#171717]">
          {/* Text and progress bar shrink away together as one circle, revealing the black curtain */}
          <motion.div
            className="absolute inset-0 z-20 flex items-center justify-center px-6 text-center"
            initial={{ clipPath: "circle(100vmax at 50% 50%)" }}
            animate={{ clipPath: "circle(100vmax at 50% 50%)" }}
            exit={{
              clipPath: "circle(0vmax at 50% 50%)",
              transition: { duration: EXIT_DURATION, ease: "easeInOut" },
            }}
          >
            <div className="relative z-10 flex flex-col items-center">
              <span className="mb-6 font-mono text-sm tabular-nums text-neutral-500">
                {String(percent).padStart(2, "0")}%
              </span>

              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
                }}
                className="flex max-w-4xl flex-wrap justify-center gap-x-4 gap-y-1 text-4xl font-bold leading-tight text-white md:text-6xl"
              >
                {words.map((word, index) => (
                  <motion.span
                    key={word}
                    variants={{
                      hidden: { y: 32, opacity: 0, filter: "blur(8px)" },
                      visible: {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { duration: 0.65, ease: "easeOut" },
                      },
                    }}
                    className={index >= HIGHLIGHT_FROM ? "highlight-gradient" : undefined}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.95, duration: 0.45 }}
                className="mt-4 text-xs uppercase tracking-[0.28em] text-neutral-500"
              >
                Laurentiu Lupsa &middot; Full-Stack Developer
              </motion.p>

              <motion.div
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ delay: 0.75, duration: 0.65, ease: "easeOut" }}
                className="relative mt-8 h-px w-40 origin-left overflow-hidden bg-neutral-800"
              >
                <div
                  className="absolute inset-y-0 left-0 bg-white transition-[width] duration-450 ease-linear"
                  style={{ width: `${percent}%`, boxShadow: "0 0 10px 1px rgba(255,255,255,0.5)" }}
                />
              </motion.div>
            </div>

            <motion.button
              type="button"
              onClick={() => setHide(true)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs text-neutral-500 transition hover:text-neutral-300"
            >
              Click to enter
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}