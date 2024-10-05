'use client'

import ProfileHeaderFirst from "@/components/profile-page/ProfileHeaderFirst";
import CreateProfileForm from "@/components/profile-page/CreateProfileForm";
import { Navbar } from "@/components/Navbar/navbar";

const profile = () => {

    //return this when the user is new (check from blockchain)
    return ( 
        <div className="w-full bg-white text-black min-h-lvh pb-10 flex gap-y-8 flex-col items-center">
            <div className="w-full"><Navbar/></div>
            <div className="flex flex-col gap-y-7 justify-center items-center w-full">
                <div className="flex flex-col items-center m-auto w-10/12">
                    <h1 className="text-5xl place-self-start font-semibold font-sans">Create Profile</h1>
                    <ProfileHeaderFirst/>
                    <div className="w-full flex justify-center items-center">
                    <CreateProfileForm/>
                    </div>
                </div>
                <button className="px-4 py-2 text-3xl bg-[#FFE502] rounded-lg font-sans">
                    Submit
                </button>
            </div>
        </div> 
    );
}
 
export default profile;