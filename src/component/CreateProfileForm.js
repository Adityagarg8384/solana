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
            case 'userName': setUserName(value)
        }

    }


    return ( <div className="flex flex-col gap-y-2 items-center" style={{gap: '5px 0'}}>
        <div>
            <label htmlFor="userName" className="flex flex-col text-xl" style={{fontSize: '32px'}}>
                <span>User Name</span>
                <input type="text" name="userName" id="userName" style={{border: '2px solid black', borderRadius: '6px', minWidth: '500px'}} onChange={ChangeHandeler}/>
            </label>
        </div>
        <div>
            <label htmlFor="email" className="flex flex-col text-xl" style={{fontSize: '32px'}}>
                <span>Eamil</span>
                <input type="email" name="email" id="email" style={{border: '2px solid black', borderRadius: '6px', minWidth: '500px'}} onChange={ChangeHandeler}/>
            </label>
        </div>
        <div className="flex justify-center items-center " style={{width: '66.67%', gap: '0px 10px'}}>
            <div style={{}}>
                <label htmlFor="age" className="flex flex-col text-xl" style={{fontSize: '32px'}}>
                    <span>Age</span>
                    <input type="number" name="age" id="age" style={{border: '2px solid black', borderRadius: '6px', maxWidth: '245px'}} onChange={ChangeHandeler}/>
                </label>
            </div>
            <div style={{}}>
                <label htmlFor="gender" className="flex flex-col text-xl" style={{fontSize: '32px'}}>
                    <span>Gender</span>
                    <input type="text" name="gender" id="gender" style={{border: '2px solid black', borderRadius: '6px', maxWidth: '245px'}} onChange={ChangeHandeler}/>
                </label>
            </div>
        </div>
    </div> );
}
 
export default CreateProfileForm;