import CourseAndTag from "@/components/CreateCourse-page/CourseAndTag";
import CourseCertficate from "@/components/CreateCourse-page/CourseCertficate";
import CourseDescription from "@/components/CreateCourse-page/CourseDescription";

const createCourse = () => {
    return ( <div className="flex mt-8 pb-8 flex-col items-center w-full">
        <div className="w-10/12 max-w-[1200px] flex flex-col gap-y-5 ">
            <div className="flex gap-x-3">
                <h1 className="self-center text-4xl font-sans">Create your own Course</h1>
                <svg width="69" height="46" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M53.6667 17.25V3.83333C53.6667 2.81667 53.2628 1.84165 52.5439 1.12276C51.825 0.403869 50.85 0 49.8333 0H3.83333C2.81667 0 1.84165 0.403869 1.12276 1.12276C0.403868 1.84165 0 2.81667 0 3.83333V42.1667C0 43.1833 0.403868 44.1584 1.12276 44.8772C1.84165 45.5961 2.81667 46 3.83333 46H49.8333C50.85 46 51.825 45.5961 52.5439 44.8772C53.2628 44.1584 53.6667 43.1833 53.6667 42.1667V28.75L69 44.0833V1.91667L53.6667 17.25Z" fill="black"/>
                </svg>
            </div>
            <div className="flex flex-col w-full gap-y-8">
                <div>
                    <CourseAndTag/>
                </div>
                <div>
                    <CourseDescription/>
                </div>
                <div>
                    <CourseCertficate/>
                </div>
            </div>
        </div>
    </div> );
}
 
export default createCourse;