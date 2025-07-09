import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Professionals | Wezard',
  description: 'Wizard About page',
};

export default function ProfessionalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
