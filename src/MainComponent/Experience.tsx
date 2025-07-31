import thunderLogo from '../assets/thunder-logo.png';
import zeceLaExameneLogo from '../assets/zece-la-examene-logo.png';
import zeceLaInfoLogo from '../assets/zece-la-info-logo.png';

const experienceList = [
  {
    logo: zeceLaExameneLogo,
    position: "Front End Developer (Full-Time)",
    company: "ZeceLaExamene",
    location: "Cluj-Napoca, Romania",
    period: "January 2024 - April 2024",
    responsibilities: [
      "Developed and optimized responsive web interfaces for an online learning platform.",
      "Collaborated with design and back-end teams to deliver seamless user experiences.",
      "Used technologies such as HTML5, CSS3, TypeScript, React, and Vue.",
      "Created reusable components and intuitive UI for course participants.",
      "Conducted cross-browser and cross-device testing and debugging."
    ],
  },
  {
    logo: thunderLogo,
    position: "Front End Developer (Internship)",
    company: "Thunder",
    location: "Cluj-Napoca, Romania",
    period: "June 2023 - October 2023",
    responsibilities: [
      "Worked within a cross-functional team to deliver clean, efficient, and scalable front-end code for a web-based product.",
      "Participated in the design and implementation of interactive UI components using React and TypeScript.",
      "Transformed application storyboards and user stories into high-quality, functional applications.",
      "Communicated with back-end developers to integrate RESTful APIs and ensure full-stack compatibility.",
      "Actively participated in code reviews, sprint planning, and team meetings."
    ],
  },
  {
    logo: zeceLaInfoLogo,
    position: "IT Teacher (Part-Time)",
    company: "ZeceLaInfo",
    location: "Cluj-Napoca, Romania",
    period: "November 2021 - July 2022",
    responsibilities: [
      "Taught advanced programming concepts, including OOP, algorithms, and problem-solving in C/C++ to high school students.",
      "Prepared and delivered engaging lessons for students with diverse backgrounds and skill levels.",
      "Mentored students for national informatics olympiads and university entrance exams.",
      "Developed and shared teaching materials, coding exercises, and online resources.",
      "Helped all students achieve grades above 9.50 at the baccalaureate, many joining the Computer Science faculty."
    ],
  },
];

export default function Experience() {
  return (
    <section className="mb-10 max-w-3xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-8">
        {experienceList.map(exp => (
          <div key={exp.company + exp.period}>
            <div className="flex items-center gap-3">
              <img
                src={exp.logo}
                alt={exp.company + " Logo"}
                className="w-14 h-14 rounded-full border-2 bg-white object-contain"
              />
              <div>
                <span className="font-semibold text-white text-lg">
                  {exp.position}
                </span>
                <span className="block text-neutral-400 text-sm">
                  @ {exp.company} ({exp.location})
                </span>
                <div className="text-neutral-400 text-sm mb-2">
                  {exp.period}
                </div>
              </div>
            </div>
            <ul className="list-disc list-inside text-neutral-300 text-base space-y-1">
              {exp.responsibilities.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
