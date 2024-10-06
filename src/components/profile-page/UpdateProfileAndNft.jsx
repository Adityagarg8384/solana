const UpdateProfileAndNft = () => {



    return ( <div className="flex flex-col gap-y-2">
        <div className="flex gap-x-2 hover:gap-x-4 transition-all ease-in-out text-xl">
            <button className="px-4 py-2 bg-[#777BED] hover:bg-[#6065f4] hover:shadow-lg hover:scale-105 transition-all ease-in-out font-sans w-9/12 rounded-lg">Update Profile</button>
            <button className="px-4 py-2 bg-[#FFE502] hover:bg-[#ffe53f] hover:shadow-lg hover:scale-105 transition-all ease-in-out font-sans w-3/12 rounded-lg">View More</button>
        </div>
        <div>
            <div className="text-4xl font-light">My NFTs</div>
            <div>
                {
                    //map the nfts array and fetch the img associated wiht the nft
                }
            </div>
        </div>
    </div> );
}
 
export default UpdateProfileAndNft;