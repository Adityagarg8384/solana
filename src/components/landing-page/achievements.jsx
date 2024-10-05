import { Card1 } from "./card1"

export const Achievements = () => {
    return (
        <div className="my-20 flex justify-center items-center gap-10" >
            <Card1
                heading={"Over 28k Students"}
                subheading={"Worldwide Students are able to learn here easily"} />
            <Card1
                heading={"578+ Online Courses"}
                subheading={"Following the trends and updated modules"} />
            <Card1
                heading={"24/7 Live Support"}
                subheading={"A dedicated team to solve problem of students"} />
        </div>
    )
}