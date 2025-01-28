import { Roboto } from "next/font/google";
import "./globals.css";

const robotoLatin = Roboto({
  variable: "--font-roboto-latin",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Primera Comunión Isabella",
  description: "Invitación - Mi primera Comunión",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${robotoLatin.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
