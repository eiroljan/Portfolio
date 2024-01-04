export const About = () => {
  return (
    <div
      id="about"
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-2 lg:py-20"
    >
      <div className="p-8 rounded  sm:p-16">
        <div className="flex flex-col items-center gap-20 lg:flex-row">
          <div className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight  sm:text-4xl sm:leading-none AgrandirHeavy">
              ABOUT ME
            </h2>

            <p className="mb-4 text-base AgrandirRegular">
              Hello there! I'm Jubet Aceberos, a passionate web developer with a
              knack for turning ideas into reality through the power of code.
              With a background in React , I thrive on challenges and take pride
              in crafting interactive, user-friendly, and visually appealing
              websites.
            </p>
            <p className="mb-4 text-base AgrandirRegular">
              I'm open to Job opportunities where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>

            <button className="CustomButton">Resume</button>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <img
              className="object-cover object-center rounded shadow-lg	 lg:w-3/5  h-96	 sm:h-96 sm:w-full"
              src={"../images/backgrounds/Jubet.JPG"}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
