import React, { useMemo } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic for disabling SSR
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

const NavbarContent = dynamic(() => import('./NavbarContent'), { ssr: false });

export const Navbar = () => {
  const network = clusterApiUrl('devnet');
  const wallets = useMemo(() => [new PhantomWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={network}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <NavbarContent />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};
