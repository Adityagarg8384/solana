


export const Card1 = ({ heading, subheading }) => {
    return (
        <div className="bg-[#777BED] font-sans text-center w-[395px] h-[180px] py-8 px-8 rounded-xl shadow-lg text-white">
            <h2 className="text-3xl font-semibold mb-3">{heading}</h2>
            <p className="text-lg">{subheading}</p>
        </div>
    );
};
