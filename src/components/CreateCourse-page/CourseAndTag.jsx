import { profileContext } from "@/context/ProfileContext";
import { useContext, useState } from "react";

const CourseAndTag = () => {

    // const [createCourseImg, setCreateCourseImg] = useState(null);
    const {createCourseImg, setCreateCourseImg} = useContext(profileContext)

    const changeHandeler = (e) => {
        const file = e.target.files[0]
        if(file){
            setCreateCourseImg(file);
        }
    }


    return ( <div className="flex justify-center items-center gap-x-4 w-full">
        <div className="flex justify-center items-center w-6/12">
            <label htmlFor="img" className="w-full flex justify-center items-center">
                <div className={`bg-[#E3ECFF] justify-center items-center flex w-full rounded-3xl ${createCourseImg ? ('py-0') : ('py-16')}`}>
                    <img src='./upload file.svg' className={`${createCourseImg ? ('hidden') : ('block')} w-[200px] h-[200px]`}/>
                    <img src={createCourseImg ? (URL.createObjectURL(createCourseImg)) : ('./upload file.svg')} className={`w-full rounded-3xl h-full object-fill ${createCourseImg ? ('block') : ('hidden')}`}/>
                </div>
                <input type="file" id="img" accept="image/*" className="hidden" onChange={changeHandeler}/>
            </label>
        </div>
        <div className="flex flex-col gap-y-7 text-3xl w-6/12">
            <div className="w-full flex justify-center items-center">
                <label htmlFor="courseName" className="flex w-10/12 flex-col gap-y-1">
                    <div className="text-2xl">Course Name</div>
                    <input type="text" id="courseName" placeholder="React.js mastery" className="border-2 border-black rounded-md px-2 py-1"/>
                </label>
            </div>
            <div className="w-full flex justify-center items-center">
                <label htmlFor="tags" className="flex w-10/12 flex-col gap-y-1">
                    <div className="text-2xl">Tags</div>
                    <input type="text" id="tags" placeholder="JavaScript, React" className="border-2 border-black rounded-md px-2 py-1"/>
                </label>
            </div>
        </div>
    </div> );
}
 
export default CourseAndTag;