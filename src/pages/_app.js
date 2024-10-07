import { Navbar } from "@/components/Navbar/navbar";
import ProfileContextProvider from "@/context/ProfileContext";
import "@/styles/globals.css";
import NextTopLoader from "nextjs-toploader";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom"; // or the specific wallet adapter you're using
import { clusterApiUrl } from "@solana/web3.js"; // Import this to specify the network

const wallets = [new PhantomWalletAdapter()];

export default function App({ Component, pageProps }) {
  const network = clusterApiUrl("devnet");
  return <>
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets}>
        <NextTopLoader
          color="#360185"
          height={4}
        />
        <Navbar />
        <ProfileContextProvider>
          <Component {...pageProps} />
        </ProfileContextProvider>;
      </WalletProvider>
    </ConnectionProvider>
  </>
}

