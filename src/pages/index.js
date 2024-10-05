import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import Connectbutton from '@/component/connectbutton';

export default function Home() {
  return (
    <div>
     <Connectbutton/>
    </div>
  );
}
