import { Geo } from 'next/font/google';
import React from 'react';

const geo = Geo({ subsets: ['latin'], weight: '400' }); //Specify the correct weight


interface MyComponentProps {
  about: boolean; // Define the 'about' prop type
  handleAbout: (event?: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavBar:React.FC<MyComponentProps> = ({about, handleAbout}) => {
  
        const user = "cesarguajardo16";
        const email_domain = "gmail.com"
        const email = `${user}@${email_domain}`


    return (
      <div>
        <nav className="fixed w-full bg-[#5c6a56] z-50 shadow-md">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            {/* Logo or Brand Name */}
            <a
                href="#"
                className="block py-2 px-3 text-white text-2xl rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-gray-300"
              >
              <span className="self-center text-5xl md:hover:text-blue-300 font-geo whitespace-nowrap text-white">
                cesar.gg
              </span>
            </a>
            {/* Hamburger Menu for Small Screens */}
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
  
            {/* Navigation Links */}
            <div
              className="hidden w-full md:flex md:w-auto"
              id="navbar-default"
            >
              <ul className="font-geo text-lg flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
                <li>
                  <a
                    href="#"
                    className="block py-2 px-3 text-white text-2xl rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-gray-300"
                    onClick={handleAbout}
                  >
                    About Me
                  </a>
                </li>
                <li>
                  <a
                    href="#Experience"
                    className="block py-2 px-3 text-white text-2xl rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-gray-300"
                  >
                    Experience
                  </a>
                </li>
                <li>
                  <a
                    href="#Projects"
                    className="block py-2 px-3 text-white text-2xl rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-gray-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${email}`} 
                    className="block py-2 px-3 text-white text-2xl rounded hover:bg-gray-700 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 dark:text-white md:dark:hover:text-gray-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="https://docs.google.com/document/d/e/2PACX-1vRohL9n3VFHynaUChowbqo7i6ghrEZb_YbqPsE3Mhef19F0sAz0UhHGIb1dAfoO8lA4hlv-WeIMC6s1/pub" target="_blank"
                    className="block py-2 px-3 text-white text-2xl rounded bg-blue-600 md:bg-transparent md:text-blue-400 md:p-0 dark:text-white md:dark:hover:text-gray-300"
                    aria-current="page"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
  

  export default NavBar;