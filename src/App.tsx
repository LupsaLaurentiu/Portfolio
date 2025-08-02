import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LoaderLanding from "./LoaderLanding";
import ProfileSidebar from "./ProfileSidebar";
import MainContent from "./MainContent";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleDone = () => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-neutral-900 text-white flex justify-center">
      {loading && <LoaderLanding onDone={handleDone} />}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="main-content"
            initial={{ y: "100vh" }}
            animate={{ y: 0 }}
            exit={{ y: "100vh" }}
            transition={{
              duration: 0.8,
              ease: [0.37, 0, 0.63, 1],
            }}
            className="w-full max-w-7xl mx-auto flex flex-col md:flex-row px-2 sm:px-6 py-8 gap-8"
          >
            <ProfileSidebar />
            <MainContent />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
