'use client';

import { navLinks } from '@/utils/public/constants';
import Link from 'next/link';
import React, { useState } from 'react';
import NavLink from '../ui/Navlink';

import { Logout } from '@/actions';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [session, setSession] = useState<{ user?: { name?: string } } | null>(
    null,
  );

  // Fetch session data
  React.useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetch('/api/auth/session');
        const data = await response.json();
        setSession(data);
      } catch (error) {
        console.error('Failed to fetch session:', error);
        setSession(null);
      }
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
      <ul className="hidden xl:flex bg-f8f8f8 p-[3px] pr-3 font-poppins text-[14px] font-normal border-[0.5px] border-textGrey rounded-[10px] items-center space-x-3 text-sm text-black">
        {navLinks.map((link, index) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={() => setHoveredItem(link.label)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {link.subMenu ? (
              <>
                <div
                  className={`px-4 py-3 hover:bg-white rounded-lg ${
                    hoveredItem === link.label ? 'bg-white' : ''
                  }`}
                >
                  <NavLink
                    href="#"
                    label={link.label}
                    icon={
                      <MdKeyboardArrowDown
                        className={`transition-transform duration-200 ${
                          hoveredItem === link.label ? 'rotate-180' : ''
                        }`}
                      />
                    }
                  />
                </div>
                <AnimatePresence>
                  {hoveredItem === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-1 z-50"
                    >
                      {link.subMenu.map((subLink) => (
                        <div
                          key={subLink.href}
                          className="block px-4 py-2.5 text-[14px] text-gray-800 hover:bg-gray-50"
                        >
                          <NavLink href={subLink.href} label={subLink.label} />
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <div
                className={`px-4 py-3 hover:bg-white rounded-[7px] ${
                  pathname === link.href
                    ? 'bg-white rounded-[7px] border-[0.5px] border-textGrey'
                    : ''
                }`}
              >
                <NavLink href={link.href} label={link.label} />
              </div>
            )}
          </div>
        ))}
      </ul>{' '}
      {/* Desktop Buttons */}
      <div className="hidden xl:flex space-x-4">
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
      <button className="xl:hidden text-2xl p-2" onClick={toggleMenu}>
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
              className="fixed right-0 top-0 h-full w-[300px] md:w-[500px] bg-white shadow-xl z-50 lg:hidden"
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
                      {link.subMenu ? (
                        <div className="space-y-2">
                          <div
                            className="flex items-center justify-between p-2"
                            onMouseEnter={() => setHoveredItem(link.label)}
                            onMouseLeave={() => setHoveredItem(null)}
                          >
                            <NavLink
                              href="#"
                              label={link.label}
                              icon={
                                <MdKeyboardArrowDown
                                  className={`transition-transform duration-200 ${
                                    hoveredItem === link.label
                                      ? 'rotate-180'
                                      : ''
                                  }`}
                                />
                              }
                            />
                          </div>
                          <AnimatePresence>
                            {hoveredItem === link.label && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="pl-4 space-y-2"
                              >
                                {link.subMenu.map((subLink) => (
                                  <div
                                    key={subLink.href}
                                    className="block p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
                                  >
                                    <NavLink
                                      href={subLink.href}
                                      label={subLink.label}
                                      onClick={toggleMenu}
                                    />
                                  </div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <div
                          className={`block p-2 hover:bg-gray-100 rounded-lg ${
                            pathname === link.href ? '' : ''
                          }`}
                        >
                          <NavLink
                            href={link.href}
                            label={link.label}
                            onClick={toggleMenu}
                          />
                        </div>
                      )}
                    </li>
                  ))}
                </ul>{' '}
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
