'use client';

import { navLinks } from '@/utils/public/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from '../ui/Navlink';
import { auth } from '@/utils/auth';
import { Logout } from '@/actions';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState<{ user?: { name?: string } } | null>(
    null,
  );

  // Fetch session data
  React.useEffect(() => {
    const getSession = async () => {
      const data = await auth();
      setSession(
        data ? { user: { name: data.user?.name || undefined } } : null,
      );
    };
    getSession();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="h-[80px] px-[10px] sm:px-[50px] flex justify-between items-center py-4 bg-white relative">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/" className="flex items-center">
          <Image alt="logo" src="/logo.png" width={150} height={29} />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex bg-textGrey p-[3px] pr-3 font-poppins text-[14px] font-normal rounded-[10px] items-center space-x-3 text-sm text-black">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </ul>

      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
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

      {/* Mobile Menu Button */}
      <button className="md:hidden text-2xl p-2" onClick={toggleMenu}>
        {isOpen ? <IoClose /> : <RxHamburgerMenu />}
      </button>

      {/* Mobile Menu Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-[300px] bg-white shadow-xl z-50 md:hidden"
            >
              <div className="p-5">
                <div className="flex justify-end">
                  <button onClick={toggleMenu} className="p-2 text-2xl">
                    <IoClose />
                  </button>
                </div>

                {/* Mobile Navigation Links */}
                <ul className="space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-lg"
                        onClick={toggleMenu}
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                {/* Mobile Buttons */}
                <div className="mt-8 space-y-4">
                  {session?.user?.name ? (
                    <form action={Logout} className="w-full">
                      <button
                        type="submit"
                        className="w-full px-[25px] py-4 bg-blue-500 text-white rounded-md text-sm font-medium hover:bg-gray-400"
                      >
                        logout
                      </button>
                    </form>
                  ) : (
                    <Link
                      href="/login"
                      className="block w-full text-center font-poppins px-[25px] py-4 bg-white text-black border border-textGrey rounded-md text-sm font-medium"
                      onClick={toggleMenu}
                    >
                      Login
                    </Link>
                  )}
                  <Link
                    href="/register"
                    className="block w-full text-center font-poppins px-[25px] py-4 bg-primary text-white rounded-md text-sm font-medium"
                    onClick={toggleMenu}
                  >
                    Join now
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
