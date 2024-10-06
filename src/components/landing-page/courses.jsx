import { Card2 } from "./card2";

export const AboutCourses = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10 mb-20">
            <h2 className="text-3xl">Course Categories</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-10">
                <Card2
                    img={""}
                    title={"Digital Marketing"}
                    about={"Learn SEO, Facebook Marketing, Advertising etc..."}
                />
                <Card2
                    img={""}
                    title={"Web Development"}
                    about={"Learn HTML, CSS, Bootstrap, Wordpress etc..."}
                />
                <Card2
                    img={""}
                    title={"Graphic Design"}
                    about={"Learn Logo Design, Package Design, Mockup Design etc..."}
                />
                <Card2
                    img={""}
                    title={"Programming"}
                    about={"Learn coding languages like Python, C#, PHP etc..."}
                />
                <Card2
                    img={""}
                    title={"Business Strategy"}
                    about={"Learn about Business Pitch, Strategies, Elevations etc..."}
                />
                <Card2
                    img={""}
                    title={"Lifestyle & Health"}
                    about={"Learn about Diet, Exercise, Personal Development etc..."}
                />
                <Card2
                    img={""}
                    title={"Olympiad Boss"}
                    about={"Learn about International Olympiad Informatics"}
                />
                <Card2
                    img={""}
                    title={"Singing & Music"}
                    about={"Learn vocal songs with Guitar, Piano etc..."}
                />
            </div>
        </div>
    );
};
