
"use client"; 
import CountUp from "react-countup";

const stats = [
    {
        number: 10,
        text: "Years of Experience",
    },
    {
        number: 8,
        text: "Projects Completed",
    },
    {
        number: 6,
        text: "Technologies mastered",
    },
    {
        number: 2735,
        text: "Code commits",
    },
]

const Statistics = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat, index) => {
                        return (
                        <div key={index} className="flex-1 flex gap-4 justify-center items-center x1:justify-start">
                            <CountUp end={stat.number} duration={10} className="text-4xl font-semibold xl:text-6xl"/>
                            <p className={`${stat.text.length < 15 ? "max-w-[100px]" : "max-w-[140px]"}leading-snug text-white/80`}>{stat.text}</p>
                        </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}   

export default Statistics;