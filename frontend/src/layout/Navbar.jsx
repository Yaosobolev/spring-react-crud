// import React from 'react'

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="m">
      <header className="w-full text-gray-700 bg-white border-t border-gray-100 shadow-sm body-font">
        <div className="container flex flex-col flex-wrap items-center justify-end p-5 mx-auto md:flex-row">
          <a className="flex items-center order-first mb-4 font-medium text-gray-900 lg:order-none lg:w-1/5 title-font lg:items-center lg:justify-center md:mb-0"></a>
          <div className="inline-flex items-center h-full ml-5 lg:w-2/5 lg:justify-end lg:ml-0">
            <Link
              href="#_"
              className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 bg-green-600 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease hover:bg-green-700 hover:-translate-y-px"
              to="/addproduct"
            >
              Добавить
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
