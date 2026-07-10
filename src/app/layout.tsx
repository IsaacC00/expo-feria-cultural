import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/home/Footer/Footer";
import { Spotlight } from "@/components/spotlight/Spotlight";
import { SpotlightManager } from "@/components/spotlight/SpotlightManager";


const inter = Inter({

  subsets: ["latin"],

  variable: "--font-inter",

});


const poppins = Poppins({

  subsets: ["latin"],

  variable: "--font-poppins",

  weight: [
    "400",
    "500",
    "600",
    "700"
  ],

});



export const metadata: Metadata = {

  title:
    "Expo Feria Cultural Andrade Marín",

  description:
    "Cultura, tradición, gastronomía y turismo.",

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html

      lang="es"

      className={` ${inter.variable} ${poppins.variable} overflow-x-hidden`} >
      <body>
        <SpotlightManager />
        <Navbar />
        {children}

        <Footer />
      </body>

    </html>

  );

}