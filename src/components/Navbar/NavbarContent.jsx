import React, { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { Button } from '../ui/button';
import Link from 'next/link';

const NavbarContent = () => {
  const { connected, publicKey, disconnect } = useWallet();

  return (
    <div className="flex sticky top-0 z-50 font-sans justify-between w-full h-20 bg-[#777BED] text-white select-none">
      <div className="flex items-center justify-start mx-[97px] w-[70%]">
        <div className="text-5xl font-semibold text-white cursor-pointer">
          Leap
        </div>
        <ul className="flex text-white text-xl gap-20 ml-48">
          <li className="cursor-pointer">
            <a href="/">Home</a>
          </li>
          <li className="cursor-pointer">
            <a href="/">Explore</a>
          </li>
          <li className="cursor-pointer">
            <a href="/">Academics</a>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-evenly w-[30%]">
        <Button className="py-5 px-6 rounded-xl text-lg border-2 border-white bg-[#777BED]">
          <Link href="/explore" >Explore</Link>
        </Button>
        {connected ? (
          <>
            <Button
              className="py-5 px-6 rounded-xl text-lg border-2 border-[#171B5A] bg-[#171B5A]"
              onClick={disconnect}
            >
              Disconnect
            </Button>
          </>
        ) : (
          <WalletMultiButton className="py-2 px-6 rounded-2xl text-lg border-2 border-white bg-transparent text-white">
            Connect
          </WalletMultiButton>
        )}
      </div>
    </div>
  );
};

export default NavbarContent;
