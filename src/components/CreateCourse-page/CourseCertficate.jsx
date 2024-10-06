import { profileContext } from "@/context/ProfileContext";
import { useContext } from "react";

const CourseCertficate = () => {
    const {courseCertificate, setCourseCertificate, courseDescription, courseVideo, createCourseImg } = useContext(profileContext)

    const changeHandeler = (e) => {
        const file = e.target.files[0]
        if(file){
            console.log('inside if')
            setCourseCertificate(file);
        }
    }

    const submitHandeler = () => {
        console.log(courseCertificate, courseVideo, createCourseImg, courseDescription);
    }

    return ( <div className="flex justify-center items-center gap-x-4 w-full">
        <div className="flex justify-center items-center w-6/12">
            <label htmlFor="certificate" className="w-full flex justify-center items-center">
                <div className={`bg-[#E3ECFF] justify-center items-center flex w-full rounded-3xl ${courseCertificate ? ('py-0') : ('py-16')}`}>
                    <img src='./upload file.svg' className={`${courseCertificate ? ('hidden') : ('block')} w-[200px] h-[200px]`}/>
                    <img src={courseCertificate ? (URL.createObjectURL(courseCertificate)) : ('./upload file.svg')} className={`w-full rounded-3xl h-full object-fill ${courseCertificate ? ('block') : ('hidden')}`}/>
                </div>
                <input type="file" id="certificate" accept="image/*" className="hidden" onChange={changeHandeler}/>
            </label>
        </div>
        <div className="flex flex-col gap-y-7 text-3xl w-6/12">
            <div className="w-full flex flex-col justify-center items-center">
                    <div className="text-3xl">Uploade NFT Certificate Image</div>
                    <div className="text-2xl">size should not be more than 1mb</div>
            </div>
            <div className="w-full flex justify-center h-[70px] items-center">
                    <button onClick={submitHandeler} className="px-4 py-2 hover:px-6 hover:py-3 transition-all ease-in-out text-3xl bg-[#FFE502] hover:bg-[#ffdd02] rounded-lg font-sans">
                        Submit
                    </button>
            </div>
        </div>
    </div> );
}
 
export default CourseCertficate;