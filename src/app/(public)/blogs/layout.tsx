import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blogs | Wezard',
  description: 'Wizard Blogs page',
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
