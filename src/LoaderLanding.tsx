import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoaderLanding({ onDone }: { onDone: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    document.body.style.overflow = hide ? "auto" : "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, [hide]);

  useEffect(() => {
    if (hide) return;
    const hideHandler = () => setHide(true);

    window.addEventListener("scroll", hideHandler, { passive: true });
    window.addEventListener("click", hideHandler);
    const timeout = setTimeout(hideHandler, 2000);

    return () => {
      window.removeEventListener("scroll", hideHandler);
      window.removeEventListener("click", hideHandler);
      clearTimeout(timeout);
    };
  }, [hide]);

  
  useEffect(() => {
    if (!hide) return;
    const t = setTimeout(onDone, 800);
    return () => clearTimeout(t);
  }, [hide, onDone]);

  return (
    <AnimatePresence>
      {!hide && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{ y: "-100vh", transition: { duration: 0.8, ease: [0.37, 0, 0.63, 1] } }}
          className="fixed inset-0 bg-neutral-900 z-50 flex items-center justify-center"
        >
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center select-none relative inline-block overflow-hidden">
          <span className="highlight-gradient">
            Turning ideas into <br />
            creative solutions
          </span>
        </h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
