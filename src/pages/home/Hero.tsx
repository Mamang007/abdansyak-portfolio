import React from "react";

function Hero() {
  return (
    <section
      id="home"
      className="w-full h-screen flex justify-center items-center text-center"
    >
      <div
        id="banner"
        className="w-[95%] xl:w-[70%] bg-white/30 p-6 lg:p-20 rounded-3xl shadow-md"
      >
        <div className="flex flex-wrap justify-center items-center">
          <div className="relative text-left">
            <p className="text-md lg:text-xl">Hello people!</p>
            <h1 className="mt-4 text-3xl lg:text-[3rem] font-extrabold">
              I'm a Web Developer
            </h1>
            <p className="text-2xl lg:mt-4 lg:text-5xl text-orange-700 lg:font-semibold">
              and I'm passionate.
            </p>
            <img
              className="absolute bottom-0 -left-16 hidden md:block w-14"
              src="/assets/arrow.png"
              alt="arrow"
            />
            <div className="hidden md:flex gap-4 mt-8">
              <button className="bg-orange-500 hover:bg-orange-700 text-[#f8db27] text-sm lg:text-lg rounded-md font-semibold py-2 px-8 shadow-button">
                Hire Me
              </button>
              <button className="bg-orange-500 hover:bg-orange-700 text-[#f8db27] text-sm lg:text-l rounded-md font-semibold py-2 px-8 shadow-button">
                <i className="fas fa-camera mr-4"></i>Download CV
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-full w-[200px] lg:w-[250px]"
              src="/assets/avatar.png"
              alt="avatar"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
