import { Button } from "../ui/button";

export const CourseCard = ({ image, title, description, authorName, price }) => {
    return (
        <div className="flex flex-col w-[395px] h-[600px] text-center rounded-xl overflow-hidden shadow-lg">
            <img
                className="w-full object-cover"
                src={image}
                alt={title}
            />
            <div className="flex flex-col justify-between p-4 h-full items-center">
                <h2 className="text-3xl font-semibold mt-4">
                    {title}
                </h2>
                <p className="text-gray-700 mb-4 text-lg">
                    {description}
                </p>
                <p className="text-gray-600 mt-8 mb-2 text-lg">
                    Mentor: {authorName}
                </p>
                <p className="font-bold text-lg mb-4">
                    ${price}
                </p>
                <Button className="h-12 w-80 text-lg text-black hover:bg-yellow-400 rounded-lg bg-yellow-300">
                    View Course
                </Button>
            </div>
        </div>
    );
};
