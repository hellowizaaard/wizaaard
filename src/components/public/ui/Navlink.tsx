import Link from "next/link";

type NavLinkProps = {
    href: string;
    label: string;
};

export default function NavLink({ href, label }: NavLinkProps) {
    return (
        <li>
            <Link href={href} className="hover:text-blue-600">
                {label}
            </Link>
        </li>
    );
}
