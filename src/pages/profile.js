"use client"
// import CreateProfileForm from "@/components/profile-page/CreateProfileForm";
// import ProfileHeaderFirst from "@/components/profile-page/ProfileHeaderFirst";
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
import ProfileComponentMain from "@/components/profile-page/ProfileComponentMain";
import CreateProfileMain from "@/components/profile-page/CreateProfileMain";


const ProfileDataSchema1 = borsh.struct([
    borsh.str('name'),
    borsh.str('email'),
    borsh.u8('age'),
    borsh.str('gender'),
    borsh.str('interest'),
    borsh.str('image1'),
    borsh.str('image2'),
    borsh.vec(borsh.publicKey(), 'public_keys'),
    borsh.vec(borsh.publicKey(), 'nfts')
]);


const Profile = () => {
    const connection = new Connection(clusterApiUrl("devnet"));
    const program_id = new PublicKey("6pHJ41iwFgAdUKXtoapRgTJLBC2xGNyL8rCEfjM3nwvD");
    console.log(program_id)
    const { publicKey, signTransaction } = useWallet();
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');
    const [fetchedUser, setFetchedUser] = useState(null);
    
    const [alreadyLoggedIn, setAlreadyLoggdedIn] = useState(false);

    function deserializeProfileData(buffer) {
        try {
            const decodedData = ProfileDataSchema1.decode(buffer);
            console.log("Raw decoded data:", decodedData);
            const { name, email, age, gender, interest, image1, image2, public_keys, nfts } = decodedData;
            setFetchedUser(decodedData)
            return new ProfileData1({ name, email, age, gender, interest, image1, image2, public_keys, nfts });
        } catch (error) {
            console.error("Error in deserialization:", error);
            throw error;
        }
    }

    useEffect(()=> {
        if(!publicKey){
            console.log("no public key found")
            setIsLoading(false);
        }
        else{
            async function fetchUser(){
                const [profilePDA] = await PublicKey.findProgramAddressSync(
                    [Buffer.from("profile"), publicKey.toBuffer()],
                    program_id
                );
                const accountInfo = await connection.getAccountInfo(profilePDA);
                console.log(accountInfo)
                if (accountInfo && accountInfo.data) {
                    console.log("Account exists, data length:", accountInfo.data.length);
                    try {
                        const profileData = deserializeProfileData(accountInfo.data);
                        console.log("Decoded profile data:", profileData);
                    } catch (error) {
                        console.error('Failed to decode profile data:', error);
                    }
                    finally{
                        toast("Details fetched successfully")
                        setAlreadyLoggdedIn(true);
                    }
                }else {
                    console.log("Account does not exist or is empty");
                }
            }
            fetchUser();
        }
    }, [publicKey])


    if(alreadyLoggedIn){
        console.log("already exists ")
        console.log(fetchedUser)
        return(
            <div>
                <ToastContainer></ToastContainer>
                <ProfileComponentMain user = {fetchedUser}/>
            </div>
        )
    }
    else{
        return (
            <CreateProfileMain/>
        );
    }

}

export default Profile;