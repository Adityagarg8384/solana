const TopEnrolledSec = () => {

    const dummyDetails = {
        "userName": "Dev_Agr",
        "email" : "dev@gmail.com",
        "age" : '19',
        "gender": 'Male',
        "interests": 'React, UI/UX, Front End',
        "banner": './image.png',       //assuming it to be an img link
        "profilePic": './avatar.png',   //assuming the above
        "enrolledCourses": ['course1', 'course2', 'course3', 'course4'], //assuming enrolledCourses will an array of hashes that defines a course
        "createdCourses": []    //assuming the same
    } 

    return ( <div className="text-black"> 
    <div className="text-[33px] mb-2 font-sans">
        Top Enrolled Courses
    </div >
    <div className="flex flex-col gap-y-2">
        {
            dummyDetails['enrolledCourses'].slice(0, 2).map((course, index) => {

                //fetch the course from blockchain using the hash

                const dummyCourse = {
                    "img": './image.png',
                    "courseName": "React.Js full course"
                    //more data
                }


                return(
                    <div key={index} className="relative hover:h-[230px] w-full hover:font-bold  transition-all ease-in-out h-[180px] p-1">
                        <img src={dummyCourse['img']} className="w-full hover:h-[230px] hover:shadow-xl h-[180px] transition-all ease-in-out"  alt="course Image"/>
                        <span className="absolute text-white font-sans text-3xl bottom-2 right-2">{dummyCourse['courseName']}</span>
                    </div>
                )
            })
        }
    </div>
    </div> );
}
 
export default TopEnrolledSec;