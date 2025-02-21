'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <li>
      <Link
        href={href}
        className={`hover:text-blue-600 ${
          isActive ? 'text-blue-600' : 'text-black'
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
