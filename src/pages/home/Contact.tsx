import React from "react";

function Contact() {
  return (
    <section
      id="contact"
      className="w-full min-h-screen flex justify-center items-center py-20"
    >
      <div className="w-full flex flex-wrap justify-center gap-8">
        <div className="basis-80 flex-grow text-center">
          <h1 className="text-xl font-bold">Tell me your next project!</h1>
          <p>
            Let's collaborate and bring your concept to life, manage your
            ongoing project, or expand your existing development team.
          </p>
        </div>
        <div className="basis-80 flex-grow text-center">
          <button className="bg-orange-500 hover:bg-orange-700 text-[#f8db27] text-sm lg:text-lg rounded-md font-semibold py-2 px-8 shadow-button">
            Get in touch!
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
