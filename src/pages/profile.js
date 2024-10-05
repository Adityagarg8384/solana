'use client'

import ProfileHeaderFirst from "@/component/ProfileHeaderFirst";
import CreateProfileForm from "@/component/CreateProfileForm";

const profile = () => {

    //return this when the user is new (check from blockchain)
    return ( 
        <div className="w-full bg-white text-black min-h-lvh flex gap-y-4 flex-col items-center">
            <div>Nav bar</div>
            <div className="felx justify-center items-center w-full">
                <div className="flex flex-col items-center m-auto w-10/12">
                    <h1 className="text-3xl place-self-start">Create Profile</h1>
                    <ProfileHeaderFirst/>
                    <div className="place-self-start">
                    <CreateProfileForm/>
                    </div>
                </div>
            </div>
        </div> 
    );
}
 
export default profile;