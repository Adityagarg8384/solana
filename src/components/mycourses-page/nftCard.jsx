

export const NftCard = ({ title, imageUrl }) => {
    return (
        <div className="bg-white flex flex-col justify-center rounded-xl shadow-xl p-4 w-[395px] h-[200px]">
            <div className="flex">
                <div className="bg-[#777BED] text-white px-4 py-2 ml-8 rounded-xl text-lg">
                    {title}
                </div>
            </div>
            <div className="flex justify-evenly mt-8">
                <div
                    className="w-20 h-20 bg-gray-300 rounded-full"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div
                    className="w-20 h-20 bg-gray-300 rounded-full"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
                <div
                    className="w-20 h-20 bg-gray-300 rounded-full"
                    style={{ backgroundImage: `url(${imageUrl})` }}
                ></div>
            </div>
        </div>
    );
};
