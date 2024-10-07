import UserCard from "./UserCard"
import TopEnrolledSec from "./TopEnrolledSec"
import CreatedCoursesSec from "./CreaedCoursesSec"
import ProfileHeaderSecond from "./ProfileHdeaderSecond"
import UpdateProfileAndNft from "./UpdateProfileAndNft"

const ProfileComponentMain = () => {
    return (
        <div className="w-full bg-white text-black min-h-lvh pb-10 mt-8 flex gap-y-8 flex-col items-center">
        {/* <div className="w-full"><Navbar/></div> */}
        <div className="flex flex-col gap-y-3 justify-center items-center w-full">
            <div className="flex flex-col gap-y-7 justify-center items-center w-full">
                <div className="flex flex-col items-center m-auto gap-y-3 w-10/12 max-w-[1440px]">
                    <h1 className="text-5xl place-self-start font-semibold font-sans">Profile Details</h1>
                    <ProfileHeaderSecond/>
                </div>
            </div>
            <div className="flex justify-between w-10/12 max-w-[1440px] items-center gap-x-2">
                <div className="w-6/12 max-w-[600px] flex flex-col gap-y-3">
                    {/* pass the fetched details to this component */}
                    <UserCard />
                    <TopEnrolledSec/>
                </div>
                <div className="w-6/12 max-w-[780px] place-self-start flex flex-col gap-y-10">
                    {/* pass the fetched details to this comp */}
                    <CreatedCoursesSec/>
                    <UpdateProfileAndNft/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfileComponentMain