import { Red_Hat_Text } from "next/font/google";
import localFont from "next/font/local";

const rubikFax = localFont({
  src: "./RubikBrokenFax-Regular.ttf",
  display: "swap",
  variable: "--font-rubik-fax",
});

const rubikBlack = localFont({
  src: "./Rubik-Black.ttf",
  display: "swap",
  variable: "--font-rubik-black",
});

const dosis = localFont({
  src: "./Dosis-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-dosis",
});

const redHat = localFont({
  src: "./RedHatText-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-red-hat",
});

export { rubikBlack, rubikFax, dosis, redHat };
