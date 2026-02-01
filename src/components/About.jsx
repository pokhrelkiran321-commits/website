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
        <div id="about" classNa
