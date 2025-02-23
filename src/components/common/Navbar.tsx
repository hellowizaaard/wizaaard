import { navLinks } from '@/utils/public/constants';
import Link from 'next/link';
import React from 'react';
import NavLink from '../ui/Navlink';

const Navbar = () => {
  return (
    <nav className="h-[80px] px-[50px] flex justify-between items-center py-4 bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/" className="flex items-center">
          <span className="text-black">wez</span>
          <span className="text-blue-600">ard</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <Link
          href="/login"
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700"
        >
          Login
        </Link>
        <Link
          href="/join"
          className="px-4 py-2 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
        >
          Join now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
