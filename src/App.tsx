import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoaderLanding from "./LoaderLanding";
import MainContent from "./MainContent";
import ProfileSidebar from "./ProfileSidebar";
import Footer from "./MainComponent/Footer";
import SmoothScroll from "./SmoothScroll";

export default function App() {
  const [loading, setLoading] = useState(true);

  const handleDone = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setLoading(false);
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-neutral-900 text-white">
        {loading && <LoaderLanding onDone={handleDone} />}

        <AnimatePresence mode="wait">
          {!loading && (
            <motion.div
              key="portfolio"
              initial={{ y: "100vh" }}
              animate={{ y: 0 }}
              exit={{ y: "100vh" }}
              transition={{
                duration: 0.8,
                ease: [0.37, 0, 0.63, 1],
              }}
              className="min-h-screen"
            >
              <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-2 py-8 sm:px-6 md:flex-row">
                <ProfileSidebar />
                <MainContent />
              </div>

              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SmoothScroll>
  );
}