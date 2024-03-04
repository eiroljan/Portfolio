"use client";

// Animation Components
import FadeInAnimation from "./animations/FadeInTopAnimation";

export const About = () => {
  const handleButtonClick = (e) => {
    e.preventDefault();
    window.open("/files/Resume.pdf", "_blank");
  };

  return (
    <div
      id="about"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20"
    >
      <div className="p-8 rounded  sm:p-16">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <FadeInAnimation>
              <h2 className="mb-10 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none AgrandirHeavy">
                ABOUT ME
              </h2>

              <p className="mb-4 text-base AgrandirRegular">
                Hello there! I'm Eirol Jan Coroando, I hold a degree in Information Technology from 
                University of the Immaculate Conception , where I honed my skills in HTML,CSS 
                and frameworks. Over the years, I've gained valuable experience in my work that 
                created a website and creating a corporate websites and ecommerce websites
              </p>

              <p className="mb-7 text-base AgrandirRegular">
              Outside of work, you'll often find me social media. 
              I believe in the importance of Embrace the present 
              moment and make the most of every opportunity for joy and fulfillment. 
              </p>

              <p className="mb-7 text-base AgrandirRegular">
              I'm excited to continue expanding my knowledge and skills in Web Development, 
              pushing the boundaries of what I thought possible and making meaningful contributions along the way.. Feel free to send or message me on my email.
              </p>

              <button className="CustomButton" onClick={handleButtonClick}>
                Resume
              </button>
            </FadeInAnimation>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            {/* <img
              className="object-cover object-center rounded shadow-lg	 lg:w-3/5  h-96	 sm:h-96 sm:w-full"
              src={"../images/backgrounds/Jubet.JPG"}
              alt=""
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
