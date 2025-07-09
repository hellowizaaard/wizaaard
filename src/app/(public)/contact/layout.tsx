import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentors | Wezard',
  description: 'Wizard Mentors page',
};

export default function MentorsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
