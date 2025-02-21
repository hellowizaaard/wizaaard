import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Wezard',
  description: 'Wizard About page',
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
