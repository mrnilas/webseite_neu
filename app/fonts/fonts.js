import localFont from "next/font/local";

const rubikDoodle = localFont({
  src: "./RubikDoodleShadow-Regular.ttf",
  display: "swap",
  variable: "--font-rubik-doodle",
});

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

export { rubikBlack, rubikDoodle, rubikFax };
