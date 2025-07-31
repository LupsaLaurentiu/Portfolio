import profil from './assets/profil.png';

export default function ProfileSidebart() {
    return (
    <aside className="md:w-[320px] w-full flex flex-row md:flex-col items-start md:items-start px-4 py-8 md:sticky md:top-8 self-start mb-4 md:mb-0">
      <img
        src={profil}
        alt="Poza Profil"
        className="w-16 h-16 md:w-36 md:h-36 rounded-full border-2 object-cover mr-4 md:mr-0 mb-0 md:mb-6"
      />
      <div className="flex-1 flex flex-col items-start md:items-start">
        <h1 className="text-xl md:text-3xl font-bold mb-1 md:mb-2 text-white">Lupsa Laurentiu Ioan</h1>
        <div className="text-base md:text-xl font-semibold text-neutral-300 mb-1 md:mb-2">Full Stack Web Developer</div>
        <div className="flex items-start gap-1 text-neutral-400 mb-2">
          <span>📍 Cluj-Napoca, Romania</span>
          <span className="ml-1">🇷🇴</span>
        </div>
        <div className="text-xs md:text-sm text-neutral-400 mb-2 md:mb-6 text-left max-w-xs">
          Building Real Products For Real Clients, Not Just More Projects
        </div>
        <div className="flex gap-2 mb-1">
            <a href="#" className="inline-flex items-center gap-1 text-white border-2 px-3 md:px-4 py-2 rounded-lg font-semibold hover:bg-neutral-700/80 transition">
                Resume
            </a>
            {/* Social icons */}
            <a
                href="https://mail.yahoo.com"
                title="Yahoo Mail"
                aria-label="Yahoo Mail"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-600 transition"
            >
                <i className="fa-solid fa-envelope text-xl"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/laurentiu-lup%C8%99a-487a7826b/"
                title="LinkedIn"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-600 transition"
            >
                <i className="fa-brands fa-linkedin-in text-xl"></i>
            </a>
            <a
                href="https://www.instagram.com/laurentiu.lupsa/"
                title="Instagram"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-600 transition"
            >
                <i className="fa-brands fa-instagram text-xl"></i>
            </a>
            </div>
      </div>
    </aside>
  );
}