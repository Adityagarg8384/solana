'use client'
import { profileContext } from "@/context/ProfileContext";
import { useContext, useEffect, useState } from "react";
import * as borsh1 from 'borsh';
import * as borsh from '@project-serum/borsh';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Connection,
    clusterApiUrl,
    PublicKey,
    Transaction,
    TransactionInstruction,
    SystemProgram,
    Keypair,
} from "@solana/web3.js";
import { useWallet } from '@solana/wallet-adapter-react';
import { Buffer } from "buffer";
import { useRouter } from "next/navigation";

class ProfileData {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
class ProfileData1 {
    constructor(fields) {
        Object.assign(this, fields);
    }
}
const ProfileDataSchema = new Map([
    [ProfileData, {
        kind: 'struct',
        fields: [
            ['name', 'string'],
            ['email', 'string'],
            ['age', 'u8'],
            ['gender', 'string'],
            ['interest', 'string'],
            ['image1', 'string'],
            ['image2', 'string'],
            ['public_keys', [PublicKey]],
            ['nfts', [PublicKey]]
        ]
    }]
]);

const uploadImageToCloudinary = async (image) => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'RADARwer');

    try {
        const response = await axios.post('https://api.cloudinary.com/v1_1/dmnjig3al/image/upload', formData);
        return response.data.secure_url;
    } catch (error) {
        console.error('Error uploading image:', error);
        throw new Error('Failed to upload image to Cloudinary');
    }
};



const CreateProfileSumit = () => {

    const connection = new Connection(clusterApiUrl("devnet"));
    const program_id = new PublicKey("6pHJ41iwFgAdUKXtoapRgTJLBC2xGNyL8rCEfjM3nwvD");
    console.log(program_id)
    const { publicKey, signTransaction } = useWallet();
    const { userName, email, age, gender, interests, banner, profilePic, setFormError, formError } = useContext(profileContext)
    const [isLoading, setIsLoading] = useState(false)
    const [statusMessage, setStatusMessage] = useState('');
    const router = useRouter()
    const submitHandler = async () => {
        if (!userName || !email || !age || !gender || !interests || !banner || !profilePic) {
            setFormError('Fill in all the required fields to proceed');
            return;
        }

        setFormError('');
        setIsLoading(true);
        setStatusMessage('');

        try {
            if (!publicKey) {
                throw new Error("Wallet not connected");
            }

            setStatusMessage('Uploading images...');
            const bannerLink = await uploadImageToCloudinary(banner);
            const profilePicLink = await uploadImageToCloudinary(profilePic);
            setStatusMessage('Images uploaded successfully');

            const profileData = new ProfileData({
                name: userName,
                email: email,
                age: parseInt(age),
                gender: gender,
                interest: interests,
                image1: bannerLink,
                image2: profilePicLink,
                public_keys: [],
                nfts: []
            });

            const serializedData = await borsh1.serialize(ProfileDataSchema, profileData);
            console.log(serializedData)
            const space = serializedData.length;
            console.log(space)

            const [pda, bump] = await PublicKey.findProgramAddressSync(
                [Buffer.from("profile"), publicKey.toBuffer()],
                program_id
            );
            console.log("bump : ",bump)

            const newAccount = Keypair.generate();
            
            const accountInstruction = SystemProgram.createAccount({
                fromPubkey: publicKey,
                newAccountPubkey: newAccount.publicKey,
                lamports: await connection.getMinimumBalanceForRentExemption(space),
                space: space,
                programId: program_id,
            });
            const instruction = new TransactionInstruction({
                keys: [
                    { pubkey: pda, isSigner: false, isWritable: true },
                    { pubkey: publicKey, isSigner: true, isWritable: true },
                    { pubkey: SystemProgram.programId, isSigner: false, isWritable: true },
                ],
                programId: program_id,
                data: serializedData
            });

            const transaction = new Transaction().add(accountInstruction,instruction);
            console.log(transaction)

            transaction.feePayer = publicKey;
            const blockhash = await connection.getLatestBlockhash();
            transaction.recentBlockhash = blockhash.blockhash;

            setStatusMessage('Please sign the transaction...');
            const signedTx = await signTransaction(transaction);

            console.log("before ps : ",signedTx)
            signedTx.partialSign(newAccount)

            setStatusMessage('Sending transaction...');
            console.log("txid")
            const txid = await connection.sendRawTransaction(signedTx.serialize());
            console.log("Transaction sent. Transaction ID:", txid);

            setStatusMessage('Confirming transaction...');
            await connection.confirmTransaction(txid);

            setStatusMessage('Profile created successfully on Solana!');
            console.log('Profile account address:', pda.toBase58());
        } catch (error) {
            console.error('Error creating profile on Solana:', error);
            setFormError(`Failed to create profile: ${error.message}`);
        } finally {
            setIsLoading(false);
            toast("Eureka signed in successfully")
            router.push('/')
        }
    }



    return (
        <div>
        <div>
            <ToastContainer></ToastContainer>
            {formError !== '' && <span className="text-red-500 text-xl">{formError}</span>}
            {statusMessage !== '' && <span className="text-green-500 text-xl">{statusMessage}</span>}
        <button onClick={submitHandler} className="px-4 py-2 hover:px-6 hover:py-3 transition-all ease-in-out text-3xl bg-[#FFE502] hover:bg-[#ffdd02] rounded-lg font-sans">
            {isLoading ? 'Submitting...' : 'Submit'}
        </button>
        </div>
        </div>
    )
}

export default CreateProfileSumit;