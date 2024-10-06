import { createContext, useState } from "react";

export const profileContext = createContext()

const ProfileContextProvier = ({children}) => {
    const [userName,setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState(null)
    const [interests, setInterests] = useState(null)
    const [banner, setBanner] = useState(null)
    const [profilePic, setProfilePic] = useState(null)
    const [formError, setFormError] = useState('')
    const [createCourseImg, setCreateCourseImg] = useState(null)
    const [courseVideo, setCourseVideo] = useState(null)
    const [courseDescription, setCourseDescription] = useState(null)
    const [courseCertificate, setCourseCertificate] =  useState(null)

    const value = {
        userName, 
        setUserName,
        email,
        setEmail,
        age,
        setAge,
        gender,
        setGender,
        interests,
        setInterests,
        banner,
        setBanner,
        profilePic,
        setProfilePic,
        formError,
        setFormError,
        courseCertificate,
        setCourseCertificate,
        courseDescription,
        setCourseDescription,
        courseVideo,
        setCourseVideo,
        createCourseImg,
        setCreateCourseImg
    }

    
    return ( 
        <profileContext.Provider value={value}>
            {children}
        </profileContext.Provider>
     );
}
 
export default ProfileContextProvier;