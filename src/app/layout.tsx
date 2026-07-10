import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";


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

        {children}

      </body>

    </html>

  );

}