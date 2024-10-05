import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Connectbutton = () => {
    const { publicKey, disconnect } = useWallet();
    const [userPublicKey, setUserPublicKey] = useState(null);

    useEffect(() => {
        if (publicKey) {
            setUserPublicKey(publicKey.toString());
            console.log(`User connected with public key: ${publicKey.toString()}`);
        }
    }, [publicKey]);

    const handleDisconnect = () => {
        disconnect();
        setUserPublicKey(null);
    };

    return (
        <div>
            <h1>Solana Wallet Connect Example</h1>

            <WalletMultiButton />

            {publicKey && (
                <div>
                    <p>User Public Key: {userPublicKey}</p>
                    <button onClick={handleDisconnect}>Disconnect</button>
                </div>
            )}
        </div>
    );
};

export default Connectbutton;
