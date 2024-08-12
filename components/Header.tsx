"use client";
import React, { useState } from "react";
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headers = [
    {
      name: "Home",
      href: "home",
      to: "home",
    },
    {
      name: "About",
      href: "about",
      to: "about",
    },
    {
      name: "Timeline",
      href: "timeline",
      to: "timeline",
    },
    {
      name: "Testimonials",
      href: "testimonials",
      to: "testimonials",
    },
    {
      name: "Booking",
      href: "booking",
      to: "booking",
    },
    {
      name: "Contact",
      href: "contact",
      to: "contact",
    },
  ];
  return (
    // <nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
    //   <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto m-4">
    //     {/* <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
    //     <div>          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dr. Kevin</span>
    //     <span className='text-gray-'>Health Specialist</span>
    //     </div>
    //     </a> */}
    //     <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

    //       <button
    //         onClick={handleMenuToggle}
    //         type="button"
    //         className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
    //         aria-controls="navbar-sticky"
    //         aria-expanded={isMenuOpen}
    //       >
    //         <span className="sr-only">Open main menu</span>
    //         <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
    //           <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
    //         </svg>
    //       </button>
    //     </div>
    //     <div className='flex justify-center items-center'>
    //     <div className={`items-center justify-between ${isMenuOpen ? 'block' : 'hidden'} w-full md:flex md:w-auto md:order-1`} id="navbar-sticky">
    //       <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 00 ">About</a>

    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:-500 00  ">Dr. Kevin</a>

    //         </li>

    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:-500 00  ">Services</a>
    //         </li>
    //         <li>
    //           <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:-500 00  ">Contact</a>
    //         </li>
    //       </ul>
    //     </div>
    //     </div>
    //   </div>
    // </nav>
    <main>
       <div className="  fixed shadow-xl top-0 left-0 w-full bg-white  z-50">
      <div className="m-4 p-4">
        <section className="hidden md:block">
          <ul className="flex items-center gap-6 justify-center text-gray-700 text-lg">
            <li className="hover:text-blue-600 hover:font-semibold hover:cursor-pointer"><Link to="home" smooth={true} duration={500}>Home</Link></li>
            <li className="hover:text-blue-600 hover:font-semibold hover:cursor-pointer"><Link to="about" smooth={true} duration={500}>About</Link></li>
            <li className="hover:text-blue-600 hover:font-semibold hover:cursor-pointer"><Link to="timeline" smooth={true} duration={500}>Timeline</Link></li>
            <li className="flex flex-col hover:cursor-pointer">
              <span className="text-center font-semibold text-xl text-blue-500">Dr. Kevin</span>
              <span className="text-center text-gray-500 text-sm font-semibold">Health Specialist</span>
            </li>
            <li className="hover:text-blue-600 hover:font-semibold hover:cursor-pointer"><Link to="testimonials" smooth={true} duration={500}>Testimonials</Link></li>
            <li className="hover:text-blue-600 hover:font-semibold hover:cursor-pointer"><Link to="booking" smooth={true} duration={500}>Booking</Link></li>
            <li className="hover:text-blue-600 hover:font-semibold hover:cursor-pointer"><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
          </ul>
        </section>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center justify-center relative text-gray-700 text-lg">
            <div className="flex items-center justify-center flex-col absolute left-0 right-0 top-0">
              <span className="text-center font-semibold text-3xl text-blue-500">
                Dr. Kevin
              </span>
              <span className="text-center text-gray-500 text-sm font-semibold">
                Health Specialist
              </span>
            </div>

            <div className="flex justify-end ml-auto z-10">
              {isMenuOpen ? (
                <ImCross size={30} onClick={handleMenuToggle} />
              ) : (
                <GiHamburgerMenu size={30} onClick={handleMenuToggle} />
              )}
            </div>
          </div>

          {/* Mobile Menu Items */}
          {isMenuOpen && (
            <div className="md:hidden mt-4">
              <ul className="flex flex-col items-center gap-4 text-gray-700 text-lg">
                {headers.map((item, index) => (
                  <li
                    key={index}
                    className="hover:text-blue-600 mt-4 hover:font-semibold hover:cursor-pointer"
                  >
                    <Link
                      to={item.to}
                      smooth={true}
                      duration={500}
                      onClick={handleMenuToggle}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
        </div>
    

    </main>
  );
};

export default Navbar;
