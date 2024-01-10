import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import localFont from "next/font/local";
import Footer from "./components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "niklasjaeger.de",
  description: "Generated by create next app",
};

const rubikDoodle = localFont({
  src: "./fonts/RubikDoodleShadow-Regular.ttf",
  display: "swap",
  variable: "--font-rubik-doodle",
});

const rubikFax = localFont({
  src: "./fonts/RubikBrokenFax-Regular.ttf",
  display: "swap",
  variable: "--font-rubik-fax",
});

const rubikBlack = localFont({
  src: "./fonts/Rubik-Black.ttf",
  display: "swap",
  variable: "--font-rubik-black",
});

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}