import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Loader from "@/Components/Loader/Loader";
import { ThemeProvider } from "@/Components/provider/ThemeProvider";
import Script from "next/script"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Oxivos Fashion",
  description: "Oxivos Fashion web app",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head className="">
       
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Loader>
            <Navbar />
            <main className="flex-1"> {children}</main>
            <Footer />
          </Loader>
        </ThemeProvider>


      </body>
    </html>
  );
}
