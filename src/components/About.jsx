import { useEffect, useRef, useState } from "react";

export default function About() {
    const circleRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile
    useEffect(() => {
        const checkScreen = () => setIsMobile(window.innerWidth < 768);
        checkScreen();
        window.addEventListener("resize", checkScreen);
        return () => window.removeEventListener("resize", checkScreen);
    }, []);

    // Intersection Observer (replay on every scroll)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setVisible(entry.isIntersecting);
            },
            { threshold: 0.4 }
        );

        if (circleRef.current) observer.observe(circleRef.current);
        return () => observer.disconnect();
    }, []);

    const tools = [
        { name: "vscode", icon: "./assets/vscode.png" },
        { name: "firebase", icon: "./assets/firebase.png" },
        { name: "mongodb", icon: "./assets/mongodb.png" },
        { name: "figma", icon: "./assets/figma.png" },
        { name: "git", icon: "./assets/git.png" },
    ];

    const data = [
        {
            name: "Languages",
            icon1: "./assets/code-icon.png",
            icon2: "./assets/code-icon-dark.png",
            description: "HTML, CSS, JavaScript, React Js, Next Js",
        },
        {
            name: "Education",
            icon1: "./assets/edu-icon.png",
            icon2: "./assets/edu-icon-dark.png",
            description: "B.Tech in Computer Science",
        },
        {
            name: "Projects",
            icon1: "./assets/project-icon.png",
            icon2: "./assets/project-icon-dark.png",
            description: "Built more than 5 projects",
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                
                {/* Image */}
                <div className="relative max-w-max mx-auto">
                    <img
                        src="./assets/user-image.png"
                        alt="User"
                        className="w-64 sm:w-80 rounded-3xl"
                    />

                    {/* Sliding Circle */}
                    <div
                        ref={circleRef}
                        className={`
                            absolute right-0 bottom-0
                            w-40 sm:w-44 aspect-square rounded-full
                            flex items-center justify-center
                            bg-gray-200 dark:bg-gray-800
                            shadow-[0_10px_40px_rgba(0,0,0,0.35)]
                            transition-all duration-700 ease-out
                            ${visible
                                ? "opacity-100 translate-x-1/4 translate-y-1/3"
                                : isMobile
                                    ? "opacity-0 -translate-y-12"
                                    : "opacity-0 -translate-x-12"
                            }
                        `}
                    >
                        <img
                            src="./assets/circular-text.png"
                            alt=""
                            className="w-full opacity-80"
                        />
                        <img
                            src="./assets/dev-icon.png"
                            alt=""
                            className="w-1/4 absolute top-1/2 left-1/2
                            -translate-x-1/2 -translate-y-1/2"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am an experienced Frontend Developer with over a decade of professional
                        expertise. I have collaborated with prestigious organizations and contributed
                        to their success and growth.
                    </p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((item) => (
                            <li
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6
                                hover:-translate-y-1 duration-500 cursor-pointer
                                hover:bg-lightHover dark:hover:bg-darkHover/50"
                            >
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                                    {item.name}
                                </h3>
                                <p className="text-gray-600 text-sm dark:text-white/80">
                                    {item.description}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <h4 className="my-6 text-gray-700 font-Ovo dark:text-white/80">
                        Tools I use
                    </h4>

                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="w-12 sm:w-14 aspect-square flex items-center justify-center
                                border border-gray-300 dark:border-white/30 rounded-lg
                                hover:-translate-y-1 duration-500"
                            >
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
