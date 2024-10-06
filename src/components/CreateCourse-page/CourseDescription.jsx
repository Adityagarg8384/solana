import { profileContext } from "@/context/ProfileContext";
import { useContext, useState } from "react";

const CourseDescription = () => {

    // const [courseVideo, setCourseVideo] = useState(null)
    // const [courseDescription, setCourseDescription] = useState(null);

    const {courseVideo, setCourseVideo, courseDescription, setCourseDescription} = useContext(profileContext)

    const descriptionChangeHandeler = (e) => {
        console.log(e.target.value)
        setCourseDescription(e.target.value);
    }

    const fileChangeHandeler = (e) => {
        const file = e.target.files[0];
        if (file && file.type.startsWith('video')) {
          setCourseVideo(file);
        } else {
          alert('Please select a valid video file.');
        }
        console.log(file)
    }

    return ( <div className="flex justify-center items-center font-sans gap-x-4 w-full">
        <div className="flex flex-col gap-y-7 text-3xl w-6/12">
            <div className="w-full flex justify-center items-center">
                <label htmlFor="courseName" className="flex w-10/12 flex-col gap-y-1">
                    {/* <input type="" id="courseName" placeholder="React.js mastery" className="border-2 border-black rounded-md px-2 py-1"/> */}
                    <textarea placeholder="Description of the Course" onInput={descriptionChangeHandeler} name="postContent" className="border-2 border-black rounded-md px-2 py-1 w-full text-xl" rows={9} />
                </label>
            </div>
        </div>
        <div className="flex justify-center items-center w-6/12">
            <label htmlFor="video" className="w-full flex justify-center items-center">
                <div className={`bg-[#E3ECFF] justify-center items-center flex w-full rounded-3xl ${courseVideo ? ('py-0') : ('py-16')}`}>
                    {courseVideo ? (
                        <div className="flex justify-center items-center w-full h-full">
                            <video className="w-full rounded-xl shadow-2xl" controls>
                                <source src={URL.createObjectURL(courseVideo)} type={courseVideo.type} />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    ):(
                        <img src='./upload file.svg' className={`w-[200px] h-[200px]`}/>
                    )}

                </div>
                <input type="file" id="video" accept="video/*" className="hidden" onChange={fileChangeHandeler}/>
            </label>
        </div>
    </div> );
}
 
export default CourseDescription;