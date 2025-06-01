import Header from './sections/Header';
import './globals.css';
import Footer from './sections/Contact';

export const metadata = {
  title: "Portfolio",
  description: "A creative portfolio by Shaik",
  keywords: "portfolio, web development, game development, freelancer",
  
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}