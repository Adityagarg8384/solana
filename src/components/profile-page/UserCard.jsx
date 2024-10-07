const UserCard = ({user}) => {
    
    const dummyDetails = {
        "userName": "Dev_Agr",
        "email" : "dev@gmail.com",
        "age" : '19',
        "gender": 'Male',
        "interests": 'React, UI/UX, Front End',
        "banner": './image.png',       //assuming it to be an img link
        "profilePic": './avatar.png',   //assuming the above
        "enrolledCourses": [], //assuming enrolledCourses will an array of hashes that defines a course
        "createdCourses": []    //assuming the same
    }   
    console.log(user)

    return ( <div className="flex flex-col hover:scale-105 hover:shadow-xl transition-all ease-in-out w-full translate-y-[-50px] gap-y-3 text-xl font-sans border border-gray-200 rounded-lg p-8 bg-gray-100">
        <div className="flex justify-between items-center">
            <img src={dummyDetails['profilePic']} className="w-[100px] aspect-square" alt="Profile Pic"/>
            <span className="text-3xl">{user.name}</span>
        </div>
        <div className="flex flex-col place-self-start text-left text-2xl w-full gap-y-3">
            <span className="flex flex-col"><span className="text-xl px-2">Username</span><span className="px-2 py-1 bg-gray-200 rounded-lg">{user.name}</span></span>
            <span className="flex flex-col"><span className="text-xl px-2">Email</span><span className="px-2 py-1 bg-gray-200 rounded-lg">{user.email}</span></span>
            <span className="flex flex-col"><span className="text-xl px-2">Gender</span><span className="px-2 py-1 bg-gray-200 rounded-lg">{user.gender}</span></span>
            <span className="flex flex-col"><span className="text-xl px-2">Interests</span><span className="px-2 py-1 bg-gray-200 rounded-lg">{user.interest}</span></span>
        </div>
    </div> );
}
 
export default UserCard;