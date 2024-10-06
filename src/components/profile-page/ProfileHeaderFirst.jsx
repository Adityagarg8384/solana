import { profileContext } from '@/context/ProfileContext';
import { useContext, useState } from 'react';

export default function ProfileHeaderFirst() {
  // const [banner, setBanner] = useState(null); 
  // const [profilePic, setProfilePic] = useState(null); 
  const {setBanner, setProfilePic, banner, profilePic} = useContext(profileContext)
  const [previewBannerUrl, setPreviewBannerUrl] = useState('/image.png'); 
  const [previewProfileUrl, setPreviewProfileUrl] = useState('/avatar.png'); 


  // Function to handle image upload
  const HandleBannerChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      setBanner(file); // Store the image in state
      setPreviewBannerUrl(URL.createObjectURL(file)); // Create preview URL
    }
  };

  const HandleProfileChange = (e) => {
    const file = e.target.files[0]; // Get the uploaded file
    if (file) {
      setProfilePic(file); // Store the image in state
      setPreviewProfileUrl(URL.createObjectURL(file)); // Create preview URL
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full" style={{position: 'relative', margin: '0 0 100px 0'}}>

      <label className="cursor-pointer text-white py-2 px-4 w-full rounded-lg shadow-md hover:shadow-xl">
        {previewBannerUrl && (
            <div className="mt-2 relative">
            <img
                src={previewBannerUrl}
                alt="Image Preview"
                className={`border ${banner? 'opacity-100' : 'opacity-60'} rounded-lg shadow-md hover:shadow-xl w-[200px] h-[300px]`}
                style={{height:'400px', width: '100%', objectFit: 'none', borderRadius: '20px'}}
            />
            <div className={`${banner? 'hidden' : 'block'} text-4xl font-sans text-black ease-in transition-all hover:font-bold absolute z-30 left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]`}>Click to add your banner</div>
            <div className={`${profilePic? 'hidden' : 'block'} text-xl font-sans text-black ease-in transition-all hover:font-bold absolute z-30 left-[21%] bottom-[-13%] translate-x-[-50%] translate-y-[-50%]`}>Click to add your profile picture</div>
            </div>
        )}
        <input
          type="file"
          accept="image/*"
          style={{display: 'none'}}
          onChange={HandleBannerChange}
        />
      </label>

      {/* profile pic */}
      <div className='flex flex-col' style={{position: 'absolute', bottom: '-75px', left: '20px'}}>
        <label className="cursor-pointer text-white py-2 px-4 rounded-lg">
            {previewBannerUrl && (
                <div className="">
                <img
                    src={previewProfileUrl}
                    alt="Image Preview"
                    className={`border ${banner? 'opacity-100' : 'opacity-90'} h-[150px] w-[150px] rounded-full shadow-md hover:shadow-2xl`}
                />
                </div>
            )}
            <input
            type="file"
            accept="image/*"
            style={{display: 'none'}}
            onChange={HandleProfileChange}
            />
        </label>
      </div>

    </div>
  );
}
