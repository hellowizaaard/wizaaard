import { socialLinks } from '@/utils/public/constants';
import React from 'react';
import NavLink from '../ui/Navlink';

const Footer = () => {
  return (
    <footer className="h-[80px] universal-padding bg-white py-4 px-6">
      <div className="h-full flex justify-between items-center">
        {/* Left: Copyright Section */}
        <div className="text-sm text-gray-600">
          © 2022 <span className="font-medium">wezardtech</span>. All Rights
          Reserved.
        </div>

        {/* Right: Social Links */}
        <ul className="flex space-x-4 text-sm font-medium text-gray-700">
          {socialLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
