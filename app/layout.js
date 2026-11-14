
import localFont from "next/font/local";
import "./globals.css";

const ttHoves = localFont({
  src: [
    {
      path: "./fonts/TT Hoves Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TT Hoves Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-hoves",
  display: "swap",
});

const ttFirs = localFont({
  src: [
    {
      path: "./fonts/TT Firs Neue Trial Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/TT Firs Neue Trial Medium.ttf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-firs",
  display: "swap",
});

export const metadata = {
  title: "Wemark xSchool",
  description: "Wemark xSchool - Marketing Education",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ttHoves.variable} ${ttFirs.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
