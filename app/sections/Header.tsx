import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row justify-between mx-0 mt-40 lg:mt-0 items-center  bg-center xl:mx-[10%] lg:mx-[7%] md:mx-[7%] lg:min-h-screen  ">
      <section
        className="w-full xl:w-[70%] relative pb-10 flex flex-col gap-4 lg:w-[70%]"
        data-aos="fade-right"
      >
        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-6xl md:text-7xl font-display">
            Charles Garrett
          </h1>
        </div>

        <div className="relative">
          <p className="mt-2 leading-relaxed text-base md:text-lg">
          I am a Technical Lead and Full-Stack Engineer with 10+ years of experience building and scaling digital products for startups and growing businesses. Over my career, I’ve led distributed teams and delivered high-impact solutions, focusing on performance, reliability, and long-term growth. I specialize in turning complex ideas into simple, effective products that create real business value and great user experiences.
            <br />
            <br />
          </p>
        </div>

        <Button asChild variant={"outline"}>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href={"charlesgarrett892@outlook.com"}
            className="flex items-center border-black justify-center gap-3 px-5 py-2 font-medium w-max border-[1px] mt-5"
          >
            Get in Touch
            <Image
              alt="message"
              src={"/svgs/message-programming.svg"}
              width={25}
              height={25}
            />
          </Link>
        </Button>
      </section>
    </header>
  );
};
export default Header;
