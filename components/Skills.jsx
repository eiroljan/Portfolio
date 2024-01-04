// Imports
import Image from "next/image";

// Utils
import { SkillsContent } from "@/utils/SkillsContent";

// Components
import FadeInTopAnimation from "./animations/FadeInTopAnimation";

export const Skills = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20">
      <div className="p-8 rounded  sm:p-16">
        <h2 className="mb-28 text-center font-sans text-1xl font-bold tracking-tight  sm:text-4xl sm:leading-none AgrandirHeavy">
          SOME TECHNOLOGIES I'VE <br /> WORKED WITH
        </h2>
        <div className=" mx-auto grid gap-[4.75rem] grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 lg:max-w-screen-lg">
          {SkillsContent.map((skills) => (
            <FadeInTopAnimation key={skills.name}>
              <div className="flex flex-col items-center">
                <Image
                  className="h-10 w-10 mb-2"
                  src={skills.imageUrl}
                  alt="languages & frameworks"
                />
                <div>
                  <h3 className="mt-5 text-base tracking-tight AgrandirRegular text-center">
                    {skills.name}
                  </h3>
                </div>
              </div>
            </FadeInTopAnimation>
          ))}
        </div>
      </div>
    </div>
  );
};
