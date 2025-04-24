import { navLinks } from '@/utils/public/constants';
import Link from 'next/link';
import React from 'react';
import NavLink from '../ui/Navlink';
import { auth } from '@/utils/auth';
import { Logout } from '@/actions';

const Navbar = async () => {
  const session = await auth();

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
        {session?.user?.name ? (
          <form action={Logout}>
            <button
              type="submit"
              className="px-8 py-3 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-gray-400"
            >
              logout
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="px-8 py-3 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-gray-400"
          >
            Login
          </Link>
        )}
        <Link
          href="/join"
          className="px-4 py-3 bg-black text-white rounded-md text-sm font-medium hover:bg-gray-800"
        >
          Join now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
