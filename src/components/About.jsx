export default function About() {
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
            description: "Bachelor of Business Studies",
        },
        {
            name: "Employment",
            icon1: "./assets/project-icon.png",
            icon2: "./assets/project-icon-dark.png",
            description: "Oli & Associates Pvt. Ltd.",
        },
    ];

    const educationList = [
        {
            institution: "Indrachandra Campus, Birtamode",
            degree: "Bachelor of Business Studies",
            year: "Currently Studying",
        },
        {
            institution: "Jana Jagriti Secondary School",
            degree: "School Leaving Certificate (Management)",
        },
        {
            institution: "Jana Jagriti Secondary School",
            degree: "School Education Examination (SEE)",
        },
    ];

    const workExperience = [
        {
            company: "Oli & Associates Pvt. Ltd.",
            website: "https://oliandassociates.com.np",
            role: "Documentation Officer",
            points: [
                "Used Salesforce CRM to track student profiles and application status",
                "Maintained accurate student and compliance records",
                "Handled visa documentation and compliance requirements",
                "Prepared and submitted GS documentation",
            ],
        },
        {
            company: "Nepal Bank Limited",
            website: "https://www.nepalbank.com.np",
            role: "Intern – Customer Service Department",
            points: [
                "Assisted customers with account opening and service inquiries",
                "Supported front-desk customer service operations",
                "Maintained customer documentation and records",
                "Gained exposure to core banking procedures and compliance standards",
            ],
        },
    ];

    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
            <h2 className="text-center text-5xl font-Ovo">About me</h2>

            <div className="flex w-full flex-col lg:flex-row items-start gap-20 my-20">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                    <img
                        src="./assets/user-image.png"
                        alt="User"
                        className="w-64 sm:w-80 rounded-3xl"
                    />
                    <img
                        src="./assets/dev-icon.png"
                        alt="Dev Logo"
                        className="w-10 sm:w-12 mt-3"
                    />
                </div>

                {/* Right Content */}
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo">
                        I am currently a Bachelor’s student pursuing a degree in Business Studies,
                        with a strong interest in the IT field. I explore frontend development as a
                        hobby and enjoy building and experimenting with web projects in my free
                        time. Alongside my studies, I am working as a Documentation Officer at Oli &
                        Associates Education Consultancy.
                    </p>

                    {/* Info Cards */}
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mb-10">
                        {data.map((item) => (
                            <li
                                key={item.name}
                                className="border border-gray-300 dark:border-white/30 rounded-xl p-6
                                hover:-translate-y-1 duration-500"
                            >
                                <img src={item.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={item.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold">{item.name}</h3>
                                <p className="text-sm">{item.description}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Tools */}
                    <h4 className="my-6 font-Ovo">Tools I use</h4>
                    <ul className="flex items-center gap-3 sm:gap-5">
                        {tools.map((tool) => (
                            <li
                                key={tool.name}
                                className="w-12 sm:w-14 aspect-square flex items-center justify-center
                                border rounded-lg hover:-translate-y-1 duration-500"
                            >
                                <img src={tool.icon} alt={tool.name} className="w-5 sm:w-7" />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Education Section */}
            <div className="mt-20 max-w-3xl mx-auto">
                <h2 className="text-3xl font-Ovo text-left underline mb-8">
                    Education
                </h2>

                <ul className="space-y-6">
                    {educationList.map((edu, i) => (
                        <li key={i}>
                            <h3 className="text-lg font-semibold">{edu.institution}</h3>
                            <p className="text-gray-600 dark:text-white/80">{edu.degree}</p>
                            {edu.year && (
                                <p className="text-sm text-gray-500 dark:text-white/60">
                                    {edu.year}
                                </p>
                            )}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Work Experience Section */}
            <div className="mt-20 max-w-3xl mx-auto">
                <h2 className="text-3xl font-Ovo text-left underline mb-8">
                    Work Experience
                </h2>

                <ul className="space-y-10">
                    {workExperience.map((work, i) => (
                        <li key={i}>
                            <h3 className="text-lg font-semibold">
                                {work.company}
                            </h3>

                            <a
                                href={work.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-blue-600 dark:text-blue-400 hover:underline block mb-1"
                            >
                                {work.website.replace("https://", "www.")}
                            </a>

                            <p className="italic text-gray-600 dark:text-white/80 mb-2">
                                {work.role}
                            </p>

                            <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-white/80">
                                {work.points.map((point, j) => (
                                    <li key={j}>{point}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
