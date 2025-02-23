import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Wezard',
  description: 'Wizard Contact page',
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
