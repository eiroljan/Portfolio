import FadeInAnimation from "./animations/FadeInTopAnimation";

export const Header = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-no-repeat opacity-30 h-screen w-full"
        style={{
          backgroundImage: 'url("/images/backgrounds/bg-main.jpg")',
        }}
      ></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center py-10">
        <FadeInAnimation>
          <div className="text-center">
            <p className="AgrandirRegular mb-3 text-xl lg:text-3xl">
              Hey, I’m Eirol Jan Coronado
            </p>
            <h4 className="AgrandirHeavy  text-2xl lg:text-5xl">
              WEB DEVELOPER
            </h4>
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
};
