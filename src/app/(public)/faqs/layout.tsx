import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQs | Wezard',
  description: 'Wizard Faqs page',
};

export default function BlogsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
