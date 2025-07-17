import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="border border-black text-white py-3 shadow-md">
      <div className="flex justify-center gap-10 text-lg font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `transition px-2 ${
              isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'hover:text-blue-300'
            }`
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            `transition px-2 ${
              isActive ? 'text-blue-400 border-b-2 border-blue-400 pb-1' : 'hover:text-blue-300'
            }`
          }
        >
          Paste
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
