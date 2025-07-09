import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jobs | Wezard',
  description: 'Wizard Blogs page',
};

export default function JobsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
