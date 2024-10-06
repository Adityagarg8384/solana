import { CourseCard } from "../courses-page/courseCard"
import { NftCard } from "./nftCard"
import { useState, useEffect } from 'react'

const fetchEnrolledCourses = () => {
    //fetch from blockchain
    return [
        {
            image: 'course-img.jpg',
            title: 'Master UI/UX Design',
            description: 'Learn the principles of UI/UX design using Figma.',
            authorName: 'Tony Stark',
            price: '49.99',
        },
        {
            image: 'course-img.jpg',
            title: 'Blockchain Development',
            description: 'Learn how to build dApps and smart contracts.',
            authorName: 'Tom Cruise',
            price: '99.99',
        },
        {
            image: 'course-img.jpg',
            title: 'Blockchain Development',
            description: 'Learn how to build dApps and smart contracts.',
            authorName: 'Tom Cruise',
            price: '99.99',
        }
    ];
}

const fetchNfts = () => {
    return [
        {
            title: "NFT 1",
            imageUrl: "nft1.jpg",
        },
        {
            title: "NFT 2",
            imageUrl: "nft2.jpg",
        },
        {
            title: "NFT 3",
            imageUrl: "nft3.jpg",
        },
    ];
};


export const MyCourses = () => {
    const [courses, setCourses] = useState([]);
    const [nfts, setNfts] = useState([]);

    useEffect(() => {
        const fetchedCourses = fetchEnrolledCourses();
        setCourses(fetchedCourses);

        const fetchedNfts = fetchNfts();
        setNfts(fetchedNfts);
    }, []);

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="w-full h-[660px] bg-[#777BED] flex flex-col items-center shadow-xl">
                <div className="w-[87%] mt-36">
                    <h2 className="text-4xl font-medium mb-5 text-white">My Courses</h2>
                    <div className="w-full h-[203px] bg-white rounded-3xl flex">
                        <div className="flex items-center mx-16 gap-20">
                            <img className="w-36 h-36 rounded-full" src="profile.jpg" alt="" />
                            <div>
                                <h2 className="text-3xl mb-2">
                                    Chirag Ag
                                </h2>
                                <h5 className="text-xl">
                                    Enrolment Hours XX
                                </h5>
                            </div>

                        </div>
                        <div className="flex items-center gap-10">
                            <h2 className="text-3xl mb-10">
                                Interested Domains
                            </h2>
                            <div className="grid grid-flow-col grid-rows-2 gap-4">
                                <div className="h-10 w-28 bg-gray-300 rounded-xl"></div>
                                <div className="h-10 w-28 bg-gray-300 rounded-xl"></div>
                                <div className="h-10 w-28 bg-gray-300 rounded-xl"></div>
                                <div className="h-10 w-28 bg-gray-300 rounded-xl"></div>
                                <div className="h-10 w-28 bg-gray-300 rounded-xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-[87%] mt-20">
                    <h2 className="text-4xl font-medium mb-5 text-white">
                        Enrolled Courses
                    </h2>
                </div>
            </div>
            <div className="grid grid-cols-3 place-items-center gap-16 -mt-28 ">
                {courses.map((course, index) => (
                    <CourseCard
                        key={index}
                        image={course.image}
                        title={course.title}
                        description={course.description}
                        authorName={course.authorName}
                        price={course.price}
                    />
                ))}
            </div>
            <div className="grid grid-cols-3 gap-16 my-20">
                {nfts.map((nft, index) => (
                    <NftCard key={index} title={nft.title} imageUrl={nft.imageUrl} />
                ))}
            </div>
        </div>
    )
}

