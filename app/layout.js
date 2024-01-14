import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navigation/navbar";
import localFont from "next/font/local";
import Footer from "./components/footer";
import { rubikBlack, dosis, rubikFax, redHat } from "./fonts/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "niklasjaeger.de",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body
        className={`${rubikBlack.variable}  ${inter.variable} ${rubikFax.variable} ${dosis.variable} ${redHat.variable}`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
