import { Button } from "../ui/button";

export const Hero = () => {
    return (
        <div className="flex flex-col font-sans w-full h-[600px] bg-[#777BED] text-white gap-8">
            <div className="ml-[97px] text-7xl text-wrap w-[580px] h-[175px] mt-[130px] font-gill-sans">
                Great Saving for a bright future
            </div>
            <div className="ml-[97px] text-4xl w-[562px] h-[94px] font-gill-sans">
                Not only teaching <span className="text-[#FFE02E] ">crypto</span> but also accepting it
            </div>
            <Button className="ml-[97px] w-[379px] h-[65px] text-xl bg-transparent
                border-white border-2 rounded-xl font-sans">
                Subscribe to our Newsletter
            </Button>
        </div>
    );
};
