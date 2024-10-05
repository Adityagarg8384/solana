const CreatedCoursesSec = () => {
    
    const dummyDetails = {
        "userName": "Dev_Agr",
        "email" : "dev@gmail.com",
        "age" : '19',
        "gender": 'Male',
        "interests": 'React, UI/UX, Front End',
        "banner": './image.png',       //assuming it to be an img link
        "profilePic": './avatar.png',   //assuming the above
        "enrolledCourses": ['course1', 'course2', 'course3', 'course4'], //assuming enrolledCourses will an array of hashes that defines a course
        "createdCourses": ['course1'],    //assuming the same
        'nfts': ['NFT1', 'NFT2', 'NFT3'] //array of nft's hashes
    } 

    return ( <div className="text-black"> 
        <div className="text-[33px] mb-2 font-sans">
            Created Courses
        </div >
        <div className="flex flex-col gap-y-2">
            {
                dummyDetails['createdCourses'].map((course, index) => {
    
                    //fetch the course from blockchain using the hash
    
                    const dummyCourse = {
                        "img": './image.png',
                        "courseName": "React.Js full course"
                        //more data
                    }
    
    
                    return(
                        <div key={index} className="w-full p-1">
                            <span className="text-black font-sans font-light text-3xl">{dummyCourse['courseName']}</span>
                            <img src={dummyCourse['img']} className="w-full h-[300px] object-fill"  alt="course Image"/>
                        </div>
                    )
                })
            }
        </div>
        </div>);
}
 
export default CreatedCoursesSec;