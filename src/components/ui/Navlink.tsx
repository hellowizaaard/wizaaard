'use client';

// import { IoChevronDownOutline } from 'react-icons/io5';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
};

export default function NavLink({
  href,
  label,
  icon,
  onClick,
  className,
}: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={
        className ||
        `hover:text-blue-600 ${
          isActive ? 'text-black font-semibold bg-white rounded-[7px]' : ''
        }`
      }
    >
      <Link href={href} className="flex items-center gap-1" onClick={onClick}>
        {label}
        {icon}
      </Link>
    </li>
  );
}
