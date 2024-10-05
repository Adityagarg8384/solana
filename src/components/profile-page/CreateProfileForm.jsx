'use client'

import { useState } from "react";

const CreateProfileForm = () => {

    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null)
    const [age, setAge] = useState(null)
    const [gender, setGender] = useState(null)
    const [interests, setInterests] = useState('')

    const ChangeHandeler = (e) => {
        const {value, id} = e.target;
        switch(id){
            case 'userName': 
                setUserName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'age':
                setAge(value)
                break;
            case 'gender':
                setGender(value)
                break;
            case 'interests':
                setInterests(value)
                break;

        }

    }

    return ( <div className="flex flex-col gap-y-7 w-8/12 max-w-[650px] font-sans items-center">
        <div className="w-full">
            <label htmlFor="userName" className="flex flex-col text-4xl gap-y-2">
                <span>User Name</span>
                <input type="text" name="userName" id="userName" className="border-2 px-3 text-2xl py-1 border-black rounded-lg" placeholder="JamesBond007" onChange={ChangeHandeler}/>
            </label>
        </div>
        <div className="w-full">
            <label htmlFor="email" className="flex flex-col text-4xl gap-y-2">
                <span>Eamil</span>
                <input type="email" name="email" id="email" className="border-2 px-3 py-1 border-black text-2xl rounded-lg" placeholder="bond@email.com" onChange={ChangeHandeler}/>
            </label>
        </div>
        <div className="flex justify-between w-full items-center ">
            <div className="w-5/12">
                <label htmlFor="age" className="flex flex-col w-full text-4xl gap-y-2">
                    <span>Age</span>
                    <input type="number" min={14} placeholder=">13" name="age" id="age" className="border-2 px-3 py-1 border-black rounded-lg text-2xl" onChange={ChangeHandeler}/>
                </label>
            </div>
            <div className="w-5/12">
                <label htmlFor="gender" className="flex flex-col w-full text-4xl gap-y-2">
                    <span>Gender</span>
                    <input type="text" name="gender" id="gender" className="border-2 uppercase px-3 py-1 rounded-lg border-black text-2xl" placeholder="male" onChange={ChangeHandeler}/>
                </label>
            </div>
        </div>
        <div className="w-full">
            <label htmlFor="interests" className="flex flex-col text-4xl gap-y-2">
                <span>Interests</span>
                <input type="text" name="interests" id="interests" className="border-2 px-3 py-1 border-black rounded-lg text-2xl" placeholder="Front End, React, UI/UX ..." onChange={ChangeHandeler}/>
            </label>
        </div>
    </div> );
}
 
export default CreateProfileForm;