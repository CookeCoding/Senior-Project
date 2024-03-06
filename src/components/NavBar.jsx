import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <img className="absolute left-0 top-0 h-16 w-16 object-contain" src="/images/emmits.jpg" alt="" />
        <a className="flex-none text-xl font-semibold dark:text-white" href="#">MSMU Inventory Management</a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
        <input
                  type="search"
                  className="relative m-0 block flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="button-addon2" />

              {/* <!--Search icon--> */}
              <span
                  className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                  id="basic-addon2">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="h-5 w-5">
                      <path
                          fillRule="evenodd"
                          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                          clipRule="evenodd" />
                  </svg>
              </span>
          <a className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#" aria-current="page">Landing</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Account</a>
          <a className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">Dashboard</a>
          {/* Adding the Link to the Waitlist */}
          <Link to="/waitlist" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Waitlist</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
