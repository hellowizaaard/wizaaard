import { Poppins } from 'next/font/google';
import '@/styles/globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--poppins',
  weight: ['100', '200', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
