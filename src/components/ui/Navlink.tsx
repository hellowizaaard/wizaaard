'use client';

import { IoChevronDownOutline } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  label: string;
  icon?: boolean;
};

export default function NavLink({ href, label, icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`hover:text-blue-600 px-[18px] py-[10px] ${
        isActive
          ? 'text-black font-semibold bg-white border-[2px] border-textGrey rounded-[7px]'
          : ''
      }`}
    >
      <Link href={href} className="flex items-center gap-1">
        {label}
        {icon && <IoChevronDownOutline />}
      </Link>
    </li>
  );
}
