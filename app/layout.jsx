/* eslint-disable @next/next/no-head-element */
import { Poppins } from "@next/font/google";
import "../styles/globals.scss";
const poppins = Poppins({
  weight: ["200", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["english"],
});
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
export { reportWebVitals } from 'next-axiom';
import { Analytics }
  from

  '@vercel/analytics/react'
  ;
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <div>{children}</div>

      </body>
      <Analytics/>
    </html>
  );
}
