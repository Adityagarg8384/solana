
export const Card2 = ({img, title, about}) => {
    return(
        <div className="text-center font-sans w-[288px] h-[270px] bg-[#E3ECFF] p-5 shadow-lg rounded-2xl" >
            <img src="" alt="" />
            <h4 className="text-2xl mb-2" >
                {title}
            </h4>
            <p className="" >
                {about}
            </p>
            <div className="cursor-pointer hover:underline hover:underline-offset-2 mt-2 text-[#777BED] " >
                see more
            </div>
        </div>
    )
}