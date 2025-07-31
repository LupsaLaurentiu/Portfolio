import cnlrLogo from '../assets/cnlr-logo.png';
import ubbLogo from '../assets/ubb-logo.png';
import caeLogo from '../assets/cae-logo.png';

const educationList = [
  {
    logo: ubbLogo,
    title: "Babeș-Bolyai University",
    location: "(Cluj-Napoca, Cluj, Romania)",
    description: "Faculty of Mathematics and Computer Science",
    details: "Bachelor's Degree, Computer Science • 2021 - present",
  },
  {
    logo: cnlrLogo,
    title: "“Liviu Rebreanu” National College",
    location: "(Bistrița, Bistrița-Năsăud, Romania)",
    description: "Mathematics-Computer Science, Intensive Informatics",
    details: "September 2017 - June 2021",
  },
  {
    logo: caeLogo,
    title: "Cambridge C1 Advanced (CAE) - English Certificate",
    location: "(Cluj-Napoca, Cluj, Romania)",
    description: "Issued by Cambridge English Language Assessment",
    details: "December 2020",
  }
];

export default function Education() {
  return (
    <section className="mb-10 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Education</h2>
      <div className="space-y-6">
        {educationList.map((item) => (
          <div key={item.title} className="flex items-start gap-5">
            <img
              src={item.logo}
              alt={item.title + " Logo"}
              className="w-20 h-20 rounded-full border-2 bg-white object-contain"
              style={{ minWidth: 80, minHeight: 80 }}
            />
            <div className="flex flex-col justify-between h-full">
              <span className="font-semibold text-white text-lg">{item.title}</span>
              <span className="text-neutral-400 text-sm">{item.location}</span>
              {item.description && (
                <span className="text-neutral-200 font-medium mt-1">{item.description}</span>
              )}
              <span className="text-neutral-400 text-sm">{item.details}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
