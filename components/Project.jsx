// Utils
import { WorksContent } from "@/utils/WorksContent";

// Imports
import Link from "next/link";
import Image from "next/image";

// Animation Components
import FadeInLeftAnimation from "./animations/FadeInLeftAnimation";

export const Projects = () => {
  return (
    <div id="works">
      <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <h2 className="text-center mb-36 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none AgrandirHeavy">
          WORKS
        </h2>
      </div>

      {WorksContent.map((project) => (
        <div className="flex flex-col justify-between items-center lg:flex-row gap-10 mb-20">
          <div className="mb-6 lg:mb-0	lg:pr-5">
            <FadeInLeftAnimation>
              <Image
                className="bg-cover object-center shadow-lg  lg:rounded-r-[50px] lg:w-[741px]"
                src={project.imageUrl}
                alt={project.title}
              />
            </FadeInLeftAnimation>
          </div>
          <div className="lg:w-2/5 mx-10">
            {project.links ? (
              <Link href={project.links} passHref>
                <h1 className="AgrandirHeavy decoration-solid	 mb-5">
                  {project.title}
                </h1>
              </Link>
            ) : (
              <h1 className="AgrandirHeavy decoration-solid	 mb-5">
                {project.title}
              </h1>
            )}
            <p className="mb-4 text-base AgrandirRegular">
              {project.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
