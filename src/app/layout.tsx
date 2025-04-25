import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Motion Designer Portfolio',
  description: 'Professional portfolio for motion design and video production',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  );
}
