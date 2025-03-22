function Headers() {
  return (
    <header>
      <nav className="w-full fixed top-5 left-0 z-10">
        <div
          id="nav-container"
          className="w-[90%] flex justify-between items-center mx-auto px-8 py-4 rounded-full transition ease-in-out duration-300"
        >
          <div className="z-10">
            <h1 className="text-xl font-bold">Abdansyak.</h1>
          </div>
          <div
            id="nav-links"
            className="absolute -top-5 left-0 w-full flex flex-col justify-center items-center gap-8 pt-20 pb-8 md:pt-0 md:pb-0 md:static md:w-auto text-center bg-white md:bg-transparent rounded-bl-full rounded-br-full transform -translate-y-full md:translate-y-0 transition ease-in-out duration-300"
          >
            <ul className="flex flex-col md:p-0 md:flex-row md:items-center gap-1">
              <li>
                <a
                  className="py-1 px-2 rounded-full bg-gray-500 text-white hover:text-white hover:bg-gray-500 transition ease-in duration-300"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="py-1 px-2 rounded-full hover:text-white hover:bg-gray-500 transition ease-in duration-300"
                  href="#about-me"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  className="py-1 px-2 rounded-full hover:text-white hover:bg-gray-500 transition ease-in duration-300"
                  href="#project"
                >
                  Project
                </a>
              </li>
              <li>
                <a
                  className="py-1 px-2 rounded-full hover:text-white hover:bg-gray-500 transition ease-in duration-300"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
              <div className="md:hidden">
                <hr className="mb-2 border-gray-300 w-full" />
                <button className="bg-orange-500 hover:bg-orange-700 text-[#f8db27] text-sm lg:text-l rounded-md font-semibold py-1 px-2 shadow-button">
                  <i className="fas fa-camera mr-1"></i>Download CV
                </button>
              </div>
            </ul>
          </div>
          <div className="flex gap-4 md:hidden z-10">
            <button onclick="toggleNav()">
              <i id="nav-open" className="fa-solid fa-bars cursor-pointer"></i>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headers;
