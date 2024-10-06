"use client";

import { useEffect, useState } from 'react';
import { CourseCard } from "./courseCard"; 
import { Searchbar } from "./searchbar";

const fetchCoursesFromBlockchain = async () => {
    // Simulated fetch from the blockchain
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
            title: 'Stocks and Investment',
            description: 'Figma ipsum component variant main layer. Vertical bullet vector star style opacity.',
            authorName: 'Mahatma Gandhi',
            price: '9.99',
        },
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
            title: 'Stocks and Investment',
            description: 'Figma ipsum component variant main layer. Vertical bullet vector star style opacity.',
            authorName: 'Mahatma Gandhi',
            price: '9.99',
        },
        
    ];
};

export const CourseSection = () => {
    const [courses, setCourses] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const coursesData = await fetchCoursesFromBlockchain();
            setCourses(coursesData);
        };
        fetchData();
    }, []);

    const filteredCourses = courses.filter(course => 
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.authorName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="my-12 mx-32">
            <Searchbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h2 className="text-3xl mt-8">Current Trending Courses</h2>
            <div className="flex flex-col items-center mt-10">
                <div className="grid grid-cols-2 lg:grid-cols-3 place-items-center gap-10">
                    {filteredCourses.length > 0 ? (
                        filteredCourses.map((course, index) => (
                            <CourseCard
                                key={index}
                                image={course.image}
                                title={course.title}
                                description={course.description}
                                authorName={course.authorName}
                                price={course.price}
                            />
                        ))
                    ) : (
                        <div className="flex  justify-center text-2xl text-gray-600 items-center text-center" >
                            Course not found
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
