import localFont from "next/font/local";

export const sfProDisplay = localFont({
  src: [
    {
      path: "../../assets/fonts/SFPRODISPLAYBLACKITALIC.otf",
      style: "italic",
      weight: "900",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYBOLD.otf",
      style: "normal",
      weight: "700",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYHEAVYITALIC.otf",
      style: "italic",
      weight: "800",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYLIGHTITALIC.otf",
      style: "italic",
      weight: "300",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYMEDIUM.otf",
      style: "normal",
      weight: "500",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYREGULAR.otf",
      style: "normal",
      weight: "400",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.otf",
      style: "italic",
      weight: "600",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYTHINITALIC.otf",
      style: "italic",
      weight: "100",
    },
    {
      path: "../../assets/fonts/SFPRODISPLAYULTRALIGHTITALIC.otf",
      style: "italic",
      weight: "200",
    },
  ],
  variable: "--font-sfpro",
});
