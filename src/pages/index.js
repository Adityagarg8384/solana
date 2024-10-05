import React, { useEffect, useState, useMemo } from 'react';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';
import Connectbutton from '@/component/connectbutton';


export default function Home() {
  const network = clusterApiUrl('devnet');
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <div>
      <ConnectionProvider endpoint={network}>
        <WalletProvider wallets={wallets} autoConnect>
          <WalletModalProvider>
            <Connectbutton />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div >
  );
}
