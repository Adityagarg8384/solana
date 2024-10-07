import ProfileHeaderFirst from "./ProfileHeaderFirst";
import CreateProfileForm from "./CreateProfileForm";
import { useContext } from "react";
import { profileContext } from "@/context/ProfileContext";
import CreateProfileSumit from "./CreateProfileSubmit";

const CreateProfileMain = () => {
    const {formError} = useContext(profileContext)
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
                     {formError !== ''? (<span className="text-red-500 text-xl">*all the field should be filled to proceed*</span>):(<></>)}
                     {/* <button onClick={submitHandeler} className="px-4 py-2 hover:px-6 hover:py-3 transition-all ease-in-out text-3xl bg-[#FFE502] hover:bg-[#ffdd02] rounded-lg font-sans">
                         Submit
                     </button> */}
                     <CreateProfileSumit/>
                 </div>
            </div>
         </div>
    )
}

export default CreateProfileMain;