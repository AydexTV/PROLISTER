import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({isLoggedIn, activeTab}) => {
  const [isUserDropDownOpen, setUserDropDownMenu] = useState(false);
  const [isNavDropDownOpen, setNavDropDownMenu] = useState(false);

  const activeTabClasses =
    "block py-2 px-3 text-[black] bg-[#F7E7DC] md:bg-[transparent] md:rounded-none rounded md:text-[#FFF8F3] md:p-0 md:pl-3 md:pr-3 border-b-2 border-[#758694]";

  const inActiveTabClasses =
    "block py-2 px-3 text-[#FFF8F3] rounded hover:bg-[#405D72] md:hover:bg-transparent md:hover:text-[#758694] md:p-0";

  const handleUserDropDownMenu = () => {
    setUserDropDownMenu(!isUserDropDownOpen);
    setNavDropDownMenu(false);
  };

  const handleNavDropDownMenu = () => {
    setNavDropDownMenu(!isNavDropDownOpen);
    setUserDropDownMenu(false);
  };

  return (
    <nav className="bg-[#405D72] border-[#758694]">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#FFF8F3]">
            ProLister
          </span>
        </a>
        <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isLoggedIn ? (
            <div className="relative">
              <button
                type="button"
                className="flex text-sm bg-[#405D72] rounded-full md:me-0"
                id="user-menu-button"
                aria-expanded="false"
                data-dropdown-toggle="user-dropdown"
                data-dropdown-placement="bottom"
                onClick={handleUserDropDownMenu}
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="w-9 h-9 rounded-full"
                  src="https://pbs.twimg.com/profile_images/1562240372100800512/m3qbdQhK_400x400.jpg"
                  alt="user photo"
                />
              </button>
              {/* <!-- Dropdown menu --> */}
              <div
                className={`absolute ${
                  isUserDropDownOpen ? "" : "hidden"
                } right-0 z-50 mt-6 text-base list-none bg-[#F7E7DC] divide-y divide-[#758694] rounded-lg shadow`}
                id="user-dropdown"
              >
                <div className="px-4 py-3">
                  <span className="block text-sm text-[#758694]">
                    Aymen Ajinou
                  </span>
                  <span className="block text-sm text-[#758694] truncate">
                    aymenajinou@gmail.com
                  </span>
                </div>
                <ul className="py-2" aria-labelledby="user-menu-button">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#758694] hover:bg-[#405D72] hover:text-[#758694]"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[#758694] hover:bg-[#405D72] hover:text-[#758694]"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-[red] hover:bg-[#405D72] hover:text-[#758694]"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Link
              to="/login"
              className="text-white bg-[#758694] hover:bg-[#F7E7DC] hover:text-[black] font-medium rounded-3xl text-sm px-4 py-2 text-center inline-block"
            >
              Login
            </Link>
          )}

          <button
            data-collapse-toggle="navbar-user"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#758694] rounded-lg md:hidden hover:bg-[#F7E7DC]"
            aria-controls="navbar-user"
            aria-expanded="false"
            onClick={handleNavDropDownMenu}
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
        </div>
        <div
          className={`items-center justify-between ${
            isNavDropDownOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1`}
          id="navbar-user"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#758694] rounded-lg bg-[transparent] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#405D72]">
            <li>
              <Link
                to="/"
                className={
                  activeTab === "home"
                    ? activeTabClasses
                    : inActiveTabClasses
                }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={
                  activeTab === "about"
                    ? activeTabClasses
                    : inActiveTabClasses
                }
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/listings"
                className={
                  activeTab === "listings"
                    ? activeTabClasses
                    : inActiveTabClasses
                }
              >
                Listings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
