import React, { useMemo } from 'react';
import dynamic from 'next/dynamic';
import { WalletProvider, ConnectionProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { PhantomWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from '@solana/web3.js';

const NavbarContent = dynamic(() => import('./NavbarContent'), { ssr: false });

export const Navbar = () => {
  return (
    <WalletModalProvider>
      <NavbarContent />
    </WalletModalProvider>
  );
};
