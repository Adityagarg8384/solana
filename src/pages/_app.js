import { Navbar } from "@/components/Navbar/navbar";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";

export default function App({ Component, pageProps }) {
  return <>
    <NextTopLoader 
      color="#360185"
      height={4}
    />
    <Navbar />
    <Component {...pageProps} />;
  </>
}
