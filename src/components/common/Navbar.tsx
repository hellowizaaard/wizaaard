import { navLinks } from '@/utils/public/constants';
import Link from 'next/link';
import React from 'react';
import NavLink from '../ui/Navlink';
import { auth } from '@/utils/auth';
import { Logout } from '@/actions';
import Image from 'next/image';

const Navbar = async () => {
  const session = await auth();

  return (
    <nav className="h-[80px] px-[50px] flex justify-between items-center py-4 bg-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/" className="flex items-center">
          <Image alt="logo" src="/logo.png" width={150} height={29} />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="bg-textGrey p-[3px] pr-3 font-poppins text-[14px] font-normal rounded-[10px] flex items-center space-x-3 text-sm text-black">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        {session?.user?.name ? (
          <form action={Logout}>
            <button
              type="submit"
              className="px-[25px] py-4 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-gray-400"
            >
              logout
            </button>
          </form>
        ) : (
          <Link
            href="/login"
            className="font-poppins px-[25px] py-4 bg-white text-black border border-textGrey rounded-md text-sm font-medium"
          >
            Login
          </Link>
        )}
        <Link
          href="/register"
          className="font-poppins px-[25px] py-4 bg-primary text-white rounded-md text-sm font-medium"
        >
          Join now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
