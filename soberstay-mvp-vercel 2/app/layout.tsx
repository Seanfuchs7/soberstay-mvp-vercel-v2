
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SoberStay - Find Sober Living Near You',
  description: 'Connecting people in recovery with quality sober living homes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
