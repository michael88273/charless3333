import { technologies } from "@/datas/data";

const About = () => {
  return (
     <section
      className="flex flex-col   mx-0 xl:mx-[10%] lg:mx-[7%] md:mx-[7%]"
      id="about"
      data-aos="fade-up"
    >
      <div className="flex flex-row gap-4 justify-center lg:justify-end items-center font-medium">
        <div className="w-[5%%] lg:hidden lg:w-36 border-b-[1px] border-b-border-color"></div>
        <span className=" text-lg sm:text-2xl font-idgrotesk">
          01. About Me
        </span>
        <div className="w-[5%] lg:w-36 border-b-[1px] border-b-border-color"></div>
      </div>
      <div className="flex flex-col  lg:flex-row w-full py-10  gap-10">
        <div className="w-full lg:w-[50%] flex flex-col gap-4 order-2 lg:order-1">
          <h4 className="font-medium">Technologies I work with</h4>
          <div
            className="bg-no-repeat bg-contain"
            // style={{ backgroundImage: "url('/patterns/pattern-4.svg')" }}
          >
            <ul className="px-6 py-6 flex flex-wrap gap-x-6 gap-y-4 sm:grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 ">
              {technologies.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 cursor-pointer filter grayscale hover:grayscale-0 transition-all duration-300 dark:filter dark:brightness-50 dark:invert hover:dark:brightness-100 hover:dark:invert-0 hover:font-medium"
                >
                  <img
                    src={tech.iconLink}
                    alt={tech.name}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                  <span className="hidden sm:inline-block">{tech.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="w-full lg:w-[50%] order-1 lg:order-2">
          <article className="leading-relaxed text-base md:text-lg">
            <br />
            With over 10 years of hands-on experience, I design and build scalable digital products for startups and growing businesses across a variety of industries.
            <br />
            <br />
          I work across the full product lifecycle, from system design and architecture to development, testing, and deployment, ensuring efficient and scalable solutions. I build robust backend systems, develop responsive frontends, design APIs, and manage cloud infrastructure. I also lead engineering teams, optimize development workflows, and ensure systems are secure, high-performing, and built to scale.
            <br />
            <br />
          I focus on delivering high-quality solutions that are fast, user-friendly, and built for long-term success, turning complex ideas into practical products that drive real results.
          </article>
        </div>
      </div>
    </section>
  );
};
export default About;
