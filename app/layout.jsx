/* eslint-disable @next/next/no-head-element */
import { Poppins } from "@next/font/google";
import "../styles/globals.scss";
const poppins = Poppins({
  weight: ["200","400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["english"],
});
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Script from "next/script";
export default function RootLayout({ children }) {
  return (
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <div>{children}</div>
        {/* <Script async src="https://polyfill.io/v3/polyfill.min.js?features=es6"/> */}
        <Script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"/>
      </body>
    </html>
  );
}
