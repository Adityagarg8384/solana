const ProfileHeaderSecond = () => {

    return ( 
    <div className="flex flex-col items-center justify-center w-full">
        <div className="w-full">
            <img
                src={'./image.png'} //here the link from the blockchain will be added
                alt="banner"
                className="border rounded-lg shadow-md w-[200px] h-[300px]"
                style={{height:'400px', width: '100%', objectFit: 'cover', borderRadius: '20px'}}
            />
        </div>
    </div> );
}
 
export default ProfileHeaderSecond;