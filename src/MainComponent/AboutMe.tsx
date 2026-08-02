export default function AboutMe() {
  return (
    <section id="about" className="mb-10 max-w-3xl scroll-mt-24">
      <h2 className="mb-4 text-2xl font-bold md:text-3xl">
        About Me
      </h2>

      <div className="space-y-4 text-base leading-relaxed text-neutral-300 md:text-lg">
        <p>
          Hi, I'm{" "}
          <span className="font-semibold text-white">
            Laurentiu Lupsa
          </span>
          , a{" "}
          <span className="font-semibold text-white">
            Full-Stack Software Developer
          </span>{" "}
          focused on building scalable, production-ready applications with
          modern web technologies. I enjoy turning complex requirements into
          clean, maintainable software that delivers real value.
        </p>

        <p>
          My work spans the entire development process, from designing system
          architecture and databases to building intuitive user interfaces,
          REST APIs, authentication, automation workflows and business logic.
          I enjoy solving technical challenges and creating products that are
          reliable, performant and easy to maintain.
        </p>

        <p>
          I'm always looking to improve as an engineer, explore new
          technologies and collaborate with talented people. Whether working
          independently or as part of a team, I value clean code, thoughtful
          design and building software that users genuinely enjoy using.
        </p>
      </div>
    </section>
  );
}