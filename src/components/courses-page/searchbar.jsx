import { Input } from "../ui/input";
import { IoIosSearch } from "react-icons/io";

export const Searchbar = ({searchTerm, setSearchTerm}) => {
    return (
        <div className="flex justify-center mt-16">
            <div className="relative w-[1248px]">
                <Input
                    className="w-full p-5 text-2xl py-7 h-16 rounded-lg shadow-md"
                    type="text"
                    placeholder="Search your course"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <IoIosSearch
                    className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 mr-2"
                    size={32}
                />
            </div>
        </div>
    );
};
