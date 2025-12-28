
import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'CAT Cultural Activity Team',
  description: 'Vibrant cultural website for CAT @ RNSIT'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-6xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
