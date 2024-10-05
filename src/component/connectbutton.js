import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Connectbutton = () => {
    const { publicKey, wallet, connect, disconnect } = useWallet();
    const [userPublicKey, setUserPublicKey] = useState(null);

    useEffect(() => {
        if (publicKey) {
            setUserPublicKey(publicKey.toString());
            console.log(`User connected with public key: ${publicKey.toString()}`);
        }
    }, [publicKey]);

    const handleConnectWallet = async () => {
        if (!wallet || !publicKey) {
            try {
                await connect();
            } catch (error) {
                if (error instanceof WalletNotConnectedError) {
                    console.error('Wallet not connected');
                } else {
                    console.error('Error connecting to wallet:', error);
                }
            }
        }
    };

    const handleDisconnect = () => {
        disconnect();
        setUserPublicKey(null);
    };

    return (
        <div>
            <h1>Solana Wallet Connect Example</h1>

            {!publicKey && (
                <button onClick={handleConnectWallet}>Connect Wallet</button>
            )}

            {publicKey && (
                <div>
                    <p>User Public Key: {userPublicKey}</p>
                    <button onClick={handleDisconnect}>Disconnect</button>
                </div>
            )}
        </div>
    )
}

export default Connectbutton;
