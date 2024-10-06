'use client'

import CreateProfileForm from "@/components/profile-page/CreateProfileForm";
import ProfileHeaderFirst from "@/components/profile-page/ProfileHeaderFirst";
import { profileContext } from "@/context/ProfileContext";
import ProfileHeaderSecond from "@/components/profile-page/ProfileHdeaderSecond";
import UserCard from "@/components/profile-page/UserCard";
import TopEnrolledSec from "@/components/profile-page/TopEnrolledSec";
import CreatedCoursesSec from "@/components/profile-page/CreaedCoursesSec";
import UpdateProfileAndNft from "@/components/profile-page/UpdateProfileAndNft";
import { useContext, useEffect } from "react";

const profile = () => {

    const {userName, email, age, gender, interests, banner, profilePic, setFormError, formError} = useContext(profileContext)

    const submitHandeler = () => {
        if(userName === null || email === null || age === null || gender === null || interests === null){
            setFormError('fill in all the required field to proceed');
            // alert('all the fields should be filled')
        }else{
            setFormError('')
            //proceed with adding the files to cloudinary and updating in blockchain
            console.log(userName, email, age, gender, interests, banner, profilePic)
        }
    }

    useEffect(() => {}, [formError])


    // return this when the user is new (check from blockchain)
    return ( 
        <div className="w-full bg-white text-black min-h-lvh pb-10 mt-8 flex gap-y-8 flex-col items-center">
            {/* <div className="w-full"><Navbar/></div> */}
            <div className="flex flex-col gap-y-7 justify-center items-center w-full">
                <div className="flex flex-col items-center m-auto w-10/12">
                    <h1 className="text-5xl place-self-start font-semibold font-sans">Create Profile</h1>
                    <ProfileHeaderFirst/>
                    <div className="w-full flex justify-center items-center">
                    <CreateProfileForm/>
                    </div>
                </div>
                <div className="h-[60px] flex justify-center items-center flex-col gap-y-2 ">
                    {formError !== ''? (<span className="text-red-500 text-xl">**all the field should be filled to proceed**</span>):(<></>)}
                    <button onClick={submitHandeler} className="px-4 py-2 hover:px-6 hover:py-3 transition-all ease-in-out text-3xl bg-[#FFE502] hover:bg-[#ffdd02] rounded-lg font-sans">
                        Submit
                    </button>
                </div>
            </div>
        </div> 
    );

    //return this when the user is not new (fetch details of the user from blockchain)
    // return (
    //     <div className="w-full bg-white text-black min-h-lvh pb-10 mt-8 flex gap-y-8 flex-col items-center">
    //         {/* <div className="w-full"><Navbar/></div> */}
    //         <div className="flex flex-col gap-y-3 justify-center items-center w-full">
    //             <div className="flex flex-col gap-y-7 justify-center items-center w-full">
    //                 <div className="flex flex-col items-center m-auto gap-y-3 w-10/12 max-w-[1440px]">
    //                     <h1 className="text-5xl place-self-start font-semibold font-sans">Profile Details</h1>
    //                     <ProfileHeaderSecond/>
    //                 </div>
    //             </div>
    //             <div className="flex justify-between w-10/12 max-w-[1440px] items-center gap-x-2">
    //                 <div className="w-6/12 max-w-[600px] flex flex-col gap-y-3">
    //                     {/* pass the fetched details to this component */}
    //                     <UserCard />
    //                     <TopEnrolledSec/>
    //                 </div>
    //                 <div className="w-6/12 max-w-[780px] place-self-start flex flex-col gap-y-10">
    //                     {/* pass the fetched details to this comp */}
    //                     <CreatedCoursesSec/>
    //                     <UpdateProfileAndNft/>
    //                 </div>
    //             </div>
    //         </div>
    //     </div> 
    // )
}
 
export default profile;