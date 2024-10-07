// src/Course.js
import React from 'react';

const Course = () => {

    const tags = [
        "UI/UX Designing",
        "Figma",
        "Testing",
        "UX Research",
        "User Persona",
        "Case Study"
    ];

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-4">
            <h1 className="text-3xl font-bold mb-4">Master UI/UX Principles</h1>
            <div className="flex items-start space-x-4">
                <img
                    src="/course-img.jpg"
                    alt="Instructor"
                    className="w-2/3 h-auto rounded-lg mb-4"
                />
                <div className="flex flex-wrap gap-3 ml-4"> 
                    {tags.map((tag, index) => (
                        <div
                            key={index}
                            className="bg-teal-400 text-white py-2 px-4 h-10 rounded-md text-sm font-semibold shadow-md hover:scale-105 transition-transform cursor-pointer"
                        >
                            {tag}
                        </div>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <p><strong>Name of the Instructor:</strong> Mr. James Charles</p>
                <p><strong>Total Course Duration:</strong> 20 Hours</p>
                <p><strong>Number of Assignments:</strong> 20</p>
                <p><strong>Number of NFTs:</strong> 3</p>
                <div className="flex items-center mt-2">
                    <h3 className="text-lg font-semibold">Ratings:</h3>
                    <span className="text-yellow-500 ml-2">★ 5k</span>
                </div>
                <div className="flex space-x-1 mt-1">
                    <span className="text-yellow-500">★★★★☆</span>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-4 pt-4 bg-blue-200 p-4">
                <h2 className="text-xl font-semibold">Message from Instructor</h2>
                <p>
                    Welcome to the UI Design Course! I'm excited to guide you through the essentials of user interface design, from principles to practical tools like Figma and Adobe XD.
                    Throughout the course, you'll find:
                </p>
                <ul className="list-disc list-inside mt-2 mb-4">
                    <li>Video lessons with step-by-step tutorials.</li>
                    <li>Assignments to practice and apply your skills.</li>
                    <li>A community forum to ask questions and share your work.</li>
                </ul>
                <p>
                    Feel free to learn at your own pace, and don't hesitate to reach out if you need help! Let's get started on creating great designs!
                </p>
            </div>
            <button className="w-full mt-4 bg-yellow-500 text-white font-semibold py-2 rounded-lg hover:bg-yellow-600">
                Enroll Now
            </button>
        </div>
    );
};

export default Course;
