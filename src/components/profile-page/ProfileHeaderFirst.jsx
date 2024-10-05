import { profileContext } from '@/context/ProfileContext';
import { useContext, useState } from 'react';

export default function ProfileHeaderFirst() {
  // const [banner, setBanner] = useState(null); 
  // const [profilePic, setProfilePic] = useState(null); 
  const {setBanner, setProfilePic} = useContext(profileContext)
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

      <label className="cursor-pointer text-white py-2 px-4 w-full rounded-lg shadow-md">
        {previewBannerUrl && (
            <div className="mt-6">
            <img
                src={previewBannerUrl}
                alt="Image Preview"
                className="border rounded-lg shadow-md w-[200px] h-[300px]"
                style={{height:'400px', width: '100%', objectFit: 'none', borderRadius: '20px'}}
            />
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
                    className=""
                    style={{height:'150px', width: '150px', borderRadius:'100%'}}
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
