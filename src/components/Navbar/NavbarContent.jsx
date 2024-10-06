import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { NavOverlay } from './navigationOverlay';

const NavbarContent = () => {
  const { connected, publicKey, disconnect } = useWallet();
  const router = useRouter();

  
  const isNavbarBlue = !connected || router.pathname == '/' || router.pathname == '/mycourses';

  return (
    <div
      className={`flex sticky top-0 z-50 font-sans justify-between w-full h-20 select-none ${
        isNavbarBlue ? 'bg-[#777BED] text-white' : 'bg-white text-black'
      }`}
    >
      <div className="flex items-center justify-start mx-[97px] w-[70%]">
        <div className={`text-5xl font-semibold cursor-pointer ${isNavbarBlue ? 'text-white' : 'text-black'}`}>
          Leap
        </div>
        <ul className={`flex text-xl gap-20 ml-48 ${isNavbarBlue ? 'text-white' : 'text-black'}`}>
          <li className="cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="cursor-pointer">
            <Link href='/explore'>Explore</Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-evenly w-[30%]">
        {connected ? (
          <>
            <div
              className="py-2 ml-4 px-4 rounded-xl text-lg border-2 border-[#171B5A] bg-[#171B5A] text-white">
              Connected
            </div>
          </>
        ) : (
          <div className="ml-32 ">
            <WalletMultiButton className="">
              Connect
            </WalletMultiButton>
          </div>
        )}
        {connected ? (
          <div className="">
            <NavOverlay/>
          </div>
        ) : (
            <div></div>
        )}
      </div>
    </div>
  );
};

export default NavbarContent;
