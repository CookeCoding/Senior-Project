import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search"; // Import the Search component

const Navbar = () => {
  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-6 dark:bg-gray-800">
      <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
        <img className="absolute left-0 top-0 h-20 w-24 object-contain" src="https://imgur.com/V5k2M73.jpg" alt="" />
        <a className="flex-none text-4xl font-bold dark:text-white" href="#">MSMU Inventory Management</a>
        <div className="flex flex-row items-center gap-5 mt-5 sm:justify-end sm:mt-0 sm:ps-5">
          {/* Include the Search component */}
          <Search />

          {/* ... existing code ... */}
          
          <Link to="/Account" className="font-medium text-blue-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-xl" href="#" aria-current="page">Home</Link>
          <Link to="/Dashboard" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-xl" href="#">Dashboard</Link>
          <Link to="/waitlist" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-xl">Waitlist</Link>
          <Link to="/Help" className="font-medium text-gray-600 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600 text-xl" href="#">Help</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;


