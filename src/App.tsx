import ProfileSidebar from "./ProfileSidebar";
import MainContent from "./MainContent";

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row px-2 sm:px-6 py-8 gap-8">
        <ProfileSidebar />
        <MainContent />
      </div>
    </div>
  );
}
